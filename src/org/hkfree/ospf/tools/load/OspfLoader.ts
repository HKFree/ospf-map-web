/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
//import { LinkFaultModel } from '../../model/linkfault/LinkFaultModel';
import { ExternalLSA } from '../../model/ospf/ExternalLSA';
import { Link } from '../../model/ospf/Link';
import { OspfLinkData } from '../../model/ospf/OspfLinkData';
import { OspfModel } from '../../model/ospf/OspfModel';
import { Router } from '../../model/ospf/Router';
import { StubLink } from '../../model/ospf/StubLink';
//import { GeoCoordinatesTransformator } from '../geo/GeoCoordinatesTransformator';
import { IpCalculator } from '../ip/IpCalculator';
import {java, javaemul} from "j4ts";
import BufferedReader = java.io.BufferedReader;
import Pattern = java.util.regex.Pattern;
import Matcher = java.util.regex.Matcher;
import IntegerHelper = javaemul.internal.IntegerHelper;
import ArrayList = java.util.ArrayList;
import List = java.util.List;

/**
 * Třída, která slouží k načítání OspfModelu z externích souborů.
 * Načítání může probíhat dle nastavení z místního adresáře, nebo z webu.
 * @author Jakub Menzel
 * @author Jan Schovánek
 * @class
 */
export class OspfLoader {
    static patternIP: string = "[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}";

    static patternMask: string = "^.*/([0-9]{1,2})";

    static patternCost: string = "^.*:\\s*([0-9]{1,})";

    static patternName: string = "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3})\\s+(.+)$";

    static patternNameArpa: string = "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.in-addr\\.arpa\\.)(\\s+.*\\s+IN\\s+PTR\\s+)(.*)$";

    static patternGeo: string = "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3})\\s+([0-9]+)\\s+([0-9]+)(.*)$";

    static patternLog: string = "^([0-9]{4}/[0-9]{2}/[0-9]{2}\\s+[0-9]{2}:[0-9]{2}:[0-9]{2})\\s+.+id\\((.+)\\).+ar.+$";

    /**
     * Metoda, která načte ze zadaného umístění topologii sítě routerů
     * @throws IOException
     * @param {OspfModel} model
     * @param {BufferedReader} input
     */
    public static loadTopology(model: OspfModel, input: BufferedReader) {
        let vstup: BufferedReader | null = null;
        let radek: string = "";
        const ipPattern: Pattern = Pattern.compile(OspfLoader.patternIP);
        let ipMatcher: Matcher | null = null;
        const maskPattern: Pattern = Pattern.compile(OspfLoader.patternMask);
        let maskMatcher: Matcher | null = null;
        vstup = input;
        while(((radek = vstup.readLine()) != null)) {{
            if (/* contains */(radek.indexOf("Link State ID") != -1)){
                let linkName: string = "";
                let linkMask: number = 0;
                ipMatcher = ipPattern.matcher(radek);
                ipMatcher.find();
                linkName = ipMatcher.group(0);
                while((!(/* contains */((radek = vstup.readLine()).indexOf("Network Mask") != -1)))) {{
                }};
                maskMatcher = maskPattern.matcher(radek);
                maskMatcher.find();
                linkMask = IntegerHelper.valueOf(maskMatcher.group(1));
                const l: Link = new Link();
                l.setLinkIDv4(linkName);
                l.setSubnetMask(linkMask);
                model.getLinks().add(l);
                while((!(/* contains */((radek = vstup.readLine()).indexOf("Attached Router") != -1)))) {{
                }};
                ipMatcher = ipPattern.matcher(radek);
                ipMatcher.find();
                model.addRouter(ipMatcher.group(0));
                while((/* contains */((radek = vstup.readLine()).indexOf("Attached Router") != -1))) {{
                    ipMatcher = ipPattern.matcher(radek);
                    ipMatcher.find();
                    model.addRouter(ipMatcher.group(0));
                }};
            }
        }};
    }

    /**
     * Metoda, která načte ze zadaného umístění ceny spojů načtené topologie
     * @throws IOException
     * @param {OspfModel} model
     * @param {string} routerIP
     * @param {BufferedReader} input
     */
    public static loadCosts(model: OspfModel, routerIP: string, input: BufferedReader) {
        let infoUzlu: BufferedReader | null = null;
        let router: Router | null = null;
        let radek: string;
        const costPattern: Pattern = Pattern.compile(OspfLoader.patternCost);
        let costMatcher: Matcher | null = null;
        const ipPattern: Pattern = Pattern.compile(OspfLoader.patternIP);
        let ipMatcher: Matcher | null = null;
        let cena: number;
        const act_spoje: List<Link> = <any>(new ArrayList<Link>());
        router = model.getRouterByIp(routerIP);
        if (router != null){
            for(let index=model.getLinks().iterator();index.hasNext();) {
                let s = index.next();
                {
                    if (s.containsRouter(router))act_spoje.add(s);
                }
            }
            infoUzlu = input;
            while(((radek = infoUzlu.readLine()) != null)) {{
                for(let index=act_spoje.iterator();index.hasNext();) {
                    let s = index.next();
                    {
                        if (/* contains */(radek.indexOf("Link ID") != -1) && /* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(radek, s.getLinkIDv4())){
                            let interfaceIp: string = "";
                            while((!/* contains */((radek = infoUzlu.readLine()).indexOf("Interface") != -1))) {{
                            }};
                            ipMatcher = ipPattern.matcher(radek);
                            ipMatcher.find();
                            interfaceIp = ipMatcher.group(0);
                            while((!/* contains */((radek = infoUzlu.readLine()).indexOf("TOS 0 Metric") != -1))) {{
                            }};
                            costMatcher = costPattern.matcher(radek);
                            costMatcher.find();
                            cena = IntegerHelper.valueOf(costMatcher.group(1));
                            model.updateCost$java_lang_String$org_hkfree_ospf_model_ospf_Router$java_lang_String$int(s.getLinkIDv4(), router, interfaceIp, cena);
                        } else if (/* contains */(radek.indexOf("Stub Network") != -1)){
                            const stub: StubLink = new StubLink();
                            while((!/* contains */((radek = infoUzlu.readLine()).indexOf("(Link ID) Net") != -1))) {{
                            }};
                            ipMatcher = ipPattern.matcher(radek);
                            ipMatcher.find();
                            stub.setLinkID(ipMatcher.group(0));
                            while((!/* contains */((radek = infoUzlu.readLine()).indexOf("(Link Data) Network Mask") != -1))) {{
                            }};
                            ipMatcher = ipPattern.matcher(radek);
                            ipMatcher.find();
                            stub.setMask(IpCalculator.getMask(ipMatcher.group(0)));
                            while((!/* contains */((radek = infoUzlu.readLine()).indexOf("TOS 0 Metric") != -1))) {{
                            }};
                            costMatcher = costPattern.matcher(radek);
                            costMatcher.find();
                            stub.setCost(IntegerHelper.valueOf(costMatcher.group(1)));
                            router.getStubs().add(stub);
                        }
                    }
                }
            }};
            for(let i: number = act_spoje.size() - 1; i >= 0; i--) {{
                act_spoje.remove(i);
            };}
        }
    }

    /**
     * Metoda, která načte ze zadaného umístění jména routerů a náležitě upraví model
     * @throws IOException
     * @param {OspfModel} model
     * @param {BufferedReader} input
     */
    public static loadRouterNames(model: OspfModel, input: BufferedReader) {
        let vstup: BufferedReader | null = null;
        let radek: string = "";
        let ip: string = "";
        let name: string = "";
        const namePattern: Pattern = Pattern.compile(OspfLoader.patternName);
        let nameMatcher: Matcher | null = null;
        vstup = input;
        while(((radek = vstup.readLine()) != null)) {{
            nameMatcher = namePattern.matcher(radek);
            nameMatcher.find();
            if (nameMatcher.matches()){
                ip = nameMatcher.group(1);
                name = nameMatcher.group(2);
                for(let index=model.getRouters().iterator();index.hasNext();) {
                    let r = index.next();
                    {
                        if ((r.getId() === ip) && !(ip === name))r.setName(name);
                    }
                }
            }
        }};
    }

    // /**
    //  * Metoda, která načte ze zadaného umístění logy o výpadcích
    //  * @param {LinkFaultModel} model
    //  * @param {BufferedReader} input
    //  * @throws ParseException
    //  * @throws IOException
    //  */
    // public static loadOSPFLog(model: LinkFaultModel, input: BufferedReader) {
    //     let vstup: BufferedReader = null;
    //     const inputDateFormater: SimpleDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
    //     const logPattern: Pattern = Pattern.compile(OspfLoader.patternLog);
    //     let logMatcher: Matcher = null;
    //     vstup = input;
    //     let line: string = "";
    //     while(((line = vstup.readLine()) != null)) {{
    //         logMatcher = logPattern.matcher(line);
    //         logMatcher.find();
    //         if (logMatcher.matches()){
    //             model.addLinkFault(inputDateFormater.parse(logMatcher.group(1)), logMatcher.group(2));
    //         }
    //     }};
    // }

    // /**
    //  * Metoda, která načte ze zadaného umístění pozice routerů
    //  * @param {OspfModel} model
    //  * @param {BufferedReader} input
    //  * @throws IOException
    //  * @throws NumberFormatException
    //  * @throws Exception
    //  */
    // public static loadRouterGeoPositions(model: OspfModel, input: BufferedReader) {
    //     let vstup: BufferedReader = null;
    //     const geoPattern: Pattern = Pattern.compile(OspfLoader.patternGeo);
    //     let geoMatcher: Matcher = null;
    //     vstup = input;
    //     const geoCoorTransormator: GeoCoordinatesTransformator = new GeoCoordinatesTransformator();
    //     let line: string = "";
    //     while(((line = vstup.readLine()) != null)) {{
    //         geoMatcher = geoPattern.matcher(line);
    //         geoMatcher.find();
    //         if (geoMatcher.matches()){
    //             model.setGpsLoaded(true);
    //             const r: Router = model.getRouterByIp(geoMatcher.group(1));
    //             if (r != null){
    //                 r.setGpsPosition(geoCoorTransormator.transformJTSKToWGS(IntegerHelper.valueOf(geoMatcher.group(2)), IntegerHelper.valueOf(geoMatcher.group(3))));
    //             }
    //         }
    //     }};
    // }

    public static getTopologyFromData(model: OspfModel, input: BufferedReader) {
        try {
            const modelIPv6: OspfModel = new OspfModel();
            let routerId: string | null = null;
            let routerName: string | null = null;
            let linkStateId: string | null = null;
            let linkId: string | null = null;
            let linkData: string | null = null;
            let linkName: string | null = null;
            let router: string | null = null;
            let neighborInterface: string | null = null;
            let neighborRouter: string | null = null;
            let advRouter: string | null = null;
            let metricType: number = -1;
            let cost: number = -1;
            let mask: number = -1;
            let numberOfLinks: number;
            let radek: string | null = null;
            const ipPattern: Pattern = Pattern.compile(OspfLoader.patternIP);
            const maskPattern: Pattern = Pattern.compile(OspfLoader.patternMask);
            const costPattern: Pattern = Pattern.compile(OspfLoader.patternCost);
            const namePattern: Pattern = Pattern.compile(OspfLoader.patternName);
            const nameArpaPatern: Pattern = Pattern.compile(OspfLoader.patternNameArpa);
            const geoPattern: Pattern = Pattern.compile(OspfLoader.patternGeo);
            //const geoCoorTransormator: GeoCoordinatesTransformator = new GeoCoordinatesTransformator();
            let matcher: Matcher | null = null;
            const cmd1: string = "Net Link States";
            const cmd2: string = "Router Link States";
            const cmd3: string = "AS External Link States";
            const cmd6: string = "AS Scoped Link State Database";
            const cmd7: string = "Area Scoped Link State Database";
            const cmd8: string = "router names";
            const cmd9: string = "geo positions";
            let isStub: boolean = false;
            let cmd: number = 0;
            while(((radek = input.readLine()) != null)) {{
                if (/* contains */(radek.indexOf(cmd1) != -1)){
                    cmd = 1;
                    continue;
                }
                if (/* contains */(radek.indexOf(cmd2) != -1)){
                    cmd = 2;
                    continue;
                }
                if (/* contains */(radek.indexOf(cmd3) != -1)){
                    cmd = 3;
                    continue;
                }
                if (/* contains */(radek.indexOf(cmd6) != -1)){
                    cmd = 6;
                    continue;
                }
                if (/* contains */(radek.indexOf(cmd7) != -1)){
                    cmd = 7;
                    continue;
                }
                if (/* contains */(radek.indexOf(cmd8) != -1)){
                    cmd = 8;
                    continue;
                }
                if (/* contains */(radek.indexOf(cmd9) != -1)){
                    cmd = 9;
                    continue;
                }
                switch((cmd)) {
                case 1:
                    if (/* contains */(radek.indexOf("Link State ID") != -1)){
                        let linkMask: number = 0;
                        matcher = ipPattern.matcher(radek);
                        matcher.find();
                        linkName = matcher.group(0);
                        while((!(/* contains */((radek = input.readLine()).indexOf("Network Mask") != -1)))) {};
                        matcher = maskPattern.matcher(radek);
                        matcher.find();
                        linkMask = IntegerHelper.valueOf(matcher.group(1));
                        const l: Link = new Link();
                        l.setLinkIDv4(linkName ?? "");
                        l.setSubnetMask(linkMask);
                        model.getLinks().add(l);
                        while((!(/* contains */((radek = input.readLine()).indexOf("Attached Router") != -1)))) {};
                        matcher = ipPattern.matcher(radek);
                        matcher.find();
                        model.addRouter(matcher.group(0));
                        while((/* contains */((radek = input.readLine()).indexOf("Attached Router") != -1))) {{
                            matcher = ipPattern.matcher(radek);
                            matcher.find();
                            model.addRouter(matcher.group(0));
                        }};
                    }
                    break;
                case 2:
                    if (/* contains */(radek.indexOf("Link State ID") != -1)){
                        matcher = ipPattern.matcher(radek);
                        matcher.find();
                        linkStateId = matcher.group(0);
                        while((!(/* contains */((radek = input.readLine()).indexOf("Number of Links") != -1)))) {};
                        matcher = costPattern.matcher(radek);
                        matcher.find();
                        numberOfLinks = IntegerHelper.valueOf(matcher.group(1));
                        for(let i: number = 0; i < numberOfLinks; i++) {{
                            while((!/* contains */((radek = input.readLine()).indexOf("Link connected to") != -1))) {};
                            if (radek == null){
                                radek = ""; // TODO is this OK to work around null? in isStub endsWith transpilation?
                            }
                            isStub = /* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(radek, "Stub Network");
                            while((!/* contains */((radek = input.readLine()).indexOf("(Link ID)") != -1))) {};
                            matcher = ipPattern.matcher(radek);
                            matcher.find();
                            linkId = matcher.group(0);
                            while((!/* contains */((radek = input.readLine()).indexOf("(Link Data)") != -1))) {};
                            matcher = ipPattern.matcher(radek);
                            matcher.find();
                            linkData = matcher.group(0);
                            while((!/* contains */((radek = input.readLine()).indexOf("TOS 0 Metric") != -1))) {};
                            matcher = costPattern.matcher(radek);
                            matcher.find();
                            cost = IntegerHelper.valueOf(matcher.group(1));
                            if (isStub){
                                model.addStubNetwork(linkStateId ?? "", linkId ?? "", IpCalculator.getMask(linkData ?? ""), cost);
                            } else {
                                model.updateCost$java_lang_String$java_lang_String$java_lang_String$int(linkId ?? "", linkStateId ?? "", linkData ?? "", cost);
                            }
                        };}
                    }
                    break;
                case 3:
                    if (/* contains */(radek.indexOf("Link State ID") != -1)){
                        matcher = ipPattern.matcher(radek);
                        matcher.find();
                        linkName = matcher.group(0);
                        while((!/* contains */((radek = input.readLine()).indexOf("Advertising Router") != -1))) {};
                        matcher = ipPattern.matcher(radek);
                        matcher.find();
                        advRouter = matcher.group(0);
                        while((!/* contains */((radek = input.readLine()).indexOf("Network Mask") != -1))) {};
                        matcher = maskPattern.matcher(radek);
                        matcher.find();
                        mask = IntegerHelper.valueOf(matcher.group(1));
                        while((!/* contains */((radek = input.readLine()).indexOf("Metric Type") != -1))) {};
                        matcher = costPattern.matcher(radek);
                        matcher.find();
                        metricType = IntegerHelper.valueOf(matcher.group(1));
                        while((!/* contains */((radek = input.readLine()).indexOf("Metric") != -1))) {};
                        matcher = costPattern.matcher(radek);
                        matcher.find();
                        cost = IntegerHelper.valueOf(matcher.group(1));
                        const exLsa: ExternalLSA = new ExternalLSA();
                        exLsa.setMask(mask);
                        exLsa.setCost(cost);
                        exLsa.setMetricType(metricType);
                        exLsa.setNetwork(linkName ?? "");
                        if (model.getRouterByIp(advRouter ?? "") != null){
                            model.getRouterByIp(advRouter ?? "")?.getExternalLsa().add(exLsa);
                        }
                    }
                    break;
                case 4:
                    if (/* contains */(radek.indexOf("Link State ID") != -1)){
                        const linkMask: number = 0;
                        matcher = ipPattern.matcher(radek);
                        matcher.find();
                        linkName = matcher.group(0);
                        const l: Link = new Link();
                        l.setLinkIDv6(linkName ?? "");
                        l.setSubnetMask(linkMask);
                        modelIPv6.getLinks().add(l);
                        while((!(/* contains */((radek = input.readLine()).indexOf("Attached Router") != -1)))) {};
                        matcher = ipPattern.matcher(radek);
                        matcher.find();
                        modelIPv6.addRouter(matcher.group(0));
                        while((/* contains */((radek = input.readLine()).indexOf("Attached Router") != -1))) {{
                            matcher = ipPattern.matcher(radek);
                            matcher.find();
                            modelIPv6.addRouter(matcher.group(0));
                        }};
                    }
                    break;
                case 5:
                    if (/* contains */(radek.indexOf("Advertising Router") != -1)){
                        matcher = ipPattern.matcher(radek);
                        matcher.find();
                        router = matcher.group(0);
                    } else if (/* contains */(radek.indexOf("Transit-Network Metric") != -1)){
                        matcher = costPattern.matcher(radek);
                        matcher.find();
                        cost = IntegerHelper.valueOf(matcher.group(1));
                    } else if (/* contains */(radek.indexOf("Neighbor Interface ID") != -1)){
                        matcher = ipPattern.matcher(radek);
                        matcher.find();
                        neighborInterface = matcher.group(0);
                    } else if (/* contains */(radek.indexOf("Neighbor Router ID") != -1)){
                        matcher = ipPattern.matcher(radek);
                        matcher.find();
                        neighborRouter = matcher.group(0);
                        modelIPv6.updateCostIPv6$java_lang_String$java_lang_String$java_lang_String$int(neighborInterface ?? "", router ?? "", neighborRouter ?? "", cost);
                    }
                    break;
                case 6:
                    if (/* contains */(radek.indexOf("Advertising Router") != -1)){
                        matcher = ipPattern.matcher(radek);
                        matcher.find();
                        advRouter = matcher.group(0);
                    } else if (/* contains */(radek.indexOf("Metric") != -1)){
                        matcher = costPattern.matcher(radek);
                        matcher.find();
                        cost = IntegerHelper.valueOf(matcher.group(1));
                    } else if (/* contains */(radek.indexOf("Prefix") != -1) && !/* contains */(radek.indexOf("Options") != -1)){
                        linkName = radek.substring(radek.indexOf(':') + 2, radek.indexOf('/'));
                        mask = IntegerHelper.valueOf(radek.substring(radek.indexOf('/') + 1));
                        const exLsa: ExternalLSA = new ExternalLSA();
                        exLsa.setMask(mask);
                        exLsa.setCost(cost);
                        exLsa.setNetwork(linkName);
                        if (model.getRouterByIp(advRouter ?? "") != null){
                            model.getRouterByIp(advRouter ?? "")?.getExternalLsa().add(exLsa);
                        } else if (modelIPv6.getRouterByIp(advRouter ?? "") != null){
                            modelIPv6.getRouterByIp(advRouter ?? "")?.getExternalLsa().add(exLsa);
                        } else {
                            console.error("OspfLoader - Router nenalezen");
                        }
                    }
                    break;
                case 7:
                    if (/* contains */(radek.indexOf("Type: Network") != -1)){
                        cmd = 4;
                    } else if (/* contains */(radek.indexOf("Type: Router") != -1)){
                        cmd = 5;
                    }
                    break;
                case 8:
                    let matches: boolean = false;
                    matcher = namePattern.matcher(radek);
                    matcher.find();
                    if (matcher.matches()){
                        matches = true;
                        routerId = matcher.group(1);
                        routerName = matcher.group(2);
                    } else {
                        matcher = nameArpaPatern.matcher(radek);
                        matcher.find();
                        if (matcher.matches()){
                            matches = true;
                            routerId = IpCalculator.getIpFromIpArpa(matcher.group(1));
                            routerName = matcher.group(3);
                        }
                    }
                    if (matches){
                        for(let index=model.getRouters().iterator();index.hasNext();) {
                            let r = index.next();
                            {
                                if ((r.getId() === routerId) && !(routerId === routerName))r.setName(routerName ?? "");
                            }
                        }
                    }
                    break;
                case 9:
                    // matcher = geoPattern.matcher(radek);
                    // matcher.find();
                    // if (matcher.matches()){
                    //     model.setGpsLoaded(true);
                    //     const r: Router = model.getRouterByIp(matcher.group(1));
                    //     if (r != null){
                    //         r.setGpsPosition(geoCoorTransormator.transformJTSKToWGS(IntegerHelper.valueOf(matcher.group(2)), IntegerHelper.valueOf(matcher.group(3))));
                    //     }
                    // }
                    break;
                }
            }};
            model.setIpv6Loaded(!modelIPv6.getLinks().isEmpty());
            let b: boolean = false;
            for(let index=modelIPv6.getLinks().iterator();index.hasNext();) {
                let l6 = index.next();
                {
                    b = false;
                    for(let index=model.getLinks().iterator();index.hasNext();) {
                        let l4 = index.next();
                        {
                            if (l6.hasSameRouters(l4.getOspfLinkData$())){
                                b = true;
                                l4.setLinkIDv6(l6.getLinkIDv6());
                                for(let index=l6.getOspfLinkData$().iterator();index.hasNext();) {
                                    let old6 = index.next();
                                    {
                                        const old4: OspfLinkData | null = l4.getOspfLinkData$java_lang_String(old6.getRouter()?.getId() ?? "");
                                        old4?.setCostIPv6(old6.getCostIPv6());
                                    }
                                }
                                continue;
                            }
                        }
                    }
                    if (!b){
                        const l: Link = new Link();
                        l.setLinkIDv6(l6.getLinkIDv6());
                        for(let index=l6.getOspfLinkData$().iterator();index.hasNext();) {
                            let old = index.next();
                            {
                                let r: Router | null = model.getRouterByIp(old.getRouter()?.getId() ?? "");
                                if (r == null){
                                    r = new Router(old.getRouter()?.getId() ?? "");
                                    model.getRouters().add(r);
                                }
                                const o: OspfLinkData = new OspfLinkData();
                                o.setCostIPv4(old.getCostIPv4());
                                o.setCostIPv6(old.getCostIPv6());
                                o.setRouter(r);
                                o.setInterfaceIp(old.getInterfaceIp());
                                l.getOspfLinkData$().add(o);
                            }
                        }
                        model.getLinks().add(l);
                    }
                }
            }
        } catch(e) {
            console.error(e);
        }
    }
}




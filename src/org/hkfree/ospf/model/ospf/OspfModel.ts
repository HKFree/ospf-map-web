/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { Constants } from '../Constants';
import { MapModel } from '../map/MapModel';
import { GPSPoint } from '../../tools/geo/GPSPoint';
import { IpComparator } from '../../tools/ip/IpComparator';
import { StubLink } from './StubLink';
import { Router } from './Router';
import { Link } from './Link';
import {java, javaemul} from "j4ts";
import List = java.util.List;
import ArrayList = java.util.ArrayList;
import Collections = java.util.Collections;
import StringHelper = javaemul.internal.StringHelper;

/**
 * Třída představující OspfModel v podobě uzlů (routerů) a spojů do kterých tyto
 * ospfLinks vstupují včetně příslušných cen(costů)
 * @author Jakub Menzel
 * @author Jan Schovánek
 * @class
 */
export class OspfModel {
    /*private*/ links: List<Link>;

    /*private*/ routers: List<Router>;

    /*private*/ modelName: string;

    /*private*/ ipv6Loaded: boolean;

    /*private*/ gpsLoaded: boolean;

    public constructor() {
        this.links = <any>(new ArrayList<Link>());
        this.routers = <any>(new ArrayList<Router>());
        this.modelName = "";
        this.ipv6Loaded = false;
        this.gpsLoaded = false;
    }

    /**
     * Metoda, která vytvoří záznam o novém spoji
     * @param {string} name
     * @param {number} subnetMask
     */
    public addOspfLink(name: string, subnetMask: number) {
        this.links.add(new Link(name, subnetMask));
    }

    /**
     * Metoda, která přidá router reprezentovaný určitou IP do posledně vytvořeného ospfLinks
     * @param {string} ip
     */
    public addRouter(ip: string) {
        if (ip === ("")){
            throw new Error("Router IP/ID is empty");
        }
        let existuje: boolean = false;
        let pozice: number = 0;
        for(let i: number = 0; i < this.routers.size(); i++) {{
            if (this.routers.get(i).getId() === ip){
                existuje = true;
                pozice = i;
            }
        };}
        if (existuje){
            this.links.get(this.links.size() - 1).addRouter$org_hkfree_ospf_model_ospf_Router(this.routers.get(pozice));
        } else {
            this.routers.add(new Router(ip));
            this.links.get(this.links.size() - 1).addRouter$org_hkfree_ospf_model_ospf_Router(this.routers.get(this.routers.size() - 1));
        }
    }

    /**
     * Spočítá u všech spojů adresu sítě a broadcast adresu
     */
    public computeNetAddressesOfLinks() {
        for(let index=this.links.iterator();index.hasNext();) {
            let ospfLink = index.next();
            {
                ospfLink.computeSubnetIps();
            }
        }
    }

    /**
     * Metoda, která vrací v textovém řetězci Ospf data
     * @return {string}
     */
    public modelToString(): string {
        let text: string = "";
        for(let index=this.links.iterator();index.hasNext();) {
            let s = index.next();
            {
                text += StringHelper.format("%1$s: %2$s\t %3$s %4$d\n%5$s\n", ["Link", s.getLinkIDv4(), "Subnet mask", s.getSubnetMask(), s.routersToString()]);
            }
        }
        return text;
    }

    /**
     * Vrací router dle jména (popisku v mapě)
     * @param {string} routerName
     * @return
     * @return {Router}
     */
    public getRouterByName(routerName: string): Router | null {
        for(let index=this.routers.iterator();index.hasNext();) {
            let u = index.next();
            {
                if ((u.getName() === routerName) || (u.getId() === routerName))return u;
            }
        }
        return null;
    }

    /**
     * Metoda, která vrací instanci Uzlu dle zadané IP
     * @param {string} ip
     * @return {Router}
     */
    public getRouterByIp(ip: string): Router | null {
        for(let index=this.routers.iterator();index.hasNext();) {
            let u = index.next();
            {
                if (u.getId() === ip)return u;
            }
        }
        return null;
    }

    /**
     * Metoda, která seřadí seznam routerů dle IP adres
     */
    public sortRoutersByIP() {
        Collections.sort<any>(this.routers, ((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0: Router, arg1: Router) =>  (funcInst['compare'] ? funcInst['compare'] : funcInst) .call(funcInst, arg0, arg1)})(new IpComparator()));
    }

    /**
     * Smaže z modelu linky, které nebyly zcela načtené
     */
    public removeNonCompletelyLoadedLinksAndRouters() {
        const linksToRemove: List<Link> = <any>(new ArrayList<Link>());
        const routersToRemove: List<Router> = <any>(new ArrayList<Router>());
        for(let index=this.links.iterator();index.hasNext();) {
            let ol = index.next();
            {
                if (ol.isNotCompletelyLoad()){
                    linksToRemove.add(ol);
                }
            }
        }
        for(let index=linksToRemove.iterator();index.hasNext();) {
            let rl = index.next();
            {
                this.links.remove(rl);
            }
        }
        for(let index=this.routers.iterator();index.hasNext();) {
            let r = index.next();
            {
                if (!this.someLinkContainsRouter(r)){
                    routersToRemove.add(r);
                }
            }
        }
        for(let index=routersToRemove.iterator();index.hasNext();) {
            let rr = index.next();
            {
                this.routers.remove(rr);
            }
        }
    }

    /**
     * Metoda, která vrací počet spojů, ve kterých je router účastníkem
     * @param {Router} r
     * @return {number}
     */
    public getCountOfLinksContainingRouter(r: Router): number {
        let x: number = 0;
        for(let index=this.links.iterator();index.hasNext();) {
            let s = index.next();
            {
                if (s.containsRouter(r))x++;
            }
        }
        return x;
    }

    /**
     * Zjistí zda je router obsažen v nějakém ze zcela načtených spojů
     * @param {Router} router
     * @return {boolean} boolean
     */
    public someLinkContainsRouter(router: Router): boolean {
        for(let index=this.links.iterator();index.hasNext();) {
            let ol = index.next();
            {
                if (ol.containsRouter(router)){
                    return true;
                }
            }
        }
        return false;
    }

    public updateCost$java_lang_String$org_hkfree_ospf_model_ospf_Router$java_lang_String$int(linkName: string, router: Router, intervaceIp: string, cost: number) {
        for(let index=this.links.iterator();index.hasNext();) {
            let s = index.next();
            {
                if (s.getLinkIDv4() === linkName){
                    s.updateLinkData(router, intervaceIp, cost);
                }
            }
        }
    }

    /**
     * Metoda, která v určitém spoji změní cenu u určitého routeru
     * @param {string} linkName
     * @param {Router} router
     * @param {string} intervaceIp
     * @param {number} cost
     */
    public updateCost(linkName?: any, router?: any, intervaceIp?: any, cost?: any) {
        if (((typeof linkName === 'string') || linkName === null) && ((router != null && router instanceof <any>Router) || router === null) && ((typeof intervaceIp === 'string') || intervaceIp === null) && ((typeof cost === 'number') || cost === null)) {
            return <any>this.updateCost$java_lang_String$org_hkfree_ospf_model_ospf_Router$java_lang_String$int(linkName, router, intervaceIp, cost);
        } else if (((typeof linkName === 'string') || linkName === null) && ((typeof router === 'string') || router === null) && ((typeof intervaceIp === 'string') || intervaceIp === null) && ((typeof cost === 'number') || cost === null)) {
            return <any>this.updateCost$java_lang_String$java_lang_String$java_lang_String$int(linkName, router, intervaceIp, cost);
        } else throw new Error('invalid overload');
    }

    public updateCostIPv6$java_lang_String$org_hkfree_ospf_model_ospf_Router$java_lang_String$int(linkName: string, router: Router, intervaceIp: string, cost: number) {
        for(let index=this.links.iterator();index.hasNext();) {
            let s = index.next();
            {
                if (s.getLinkIDv6() === linkName){
                    s.updateLinkDataIPv6(router, intervaceIp, cost);
                }
            }
        }
    }

    public updateCostIPv6(linkName?: any, router?: any, intervaceIp?: any, cost?: any) {
        if (((typeof linkName === 'string') || linkName === null) && ((router != null && router instanceof <any>Router) || router === null) && ((typeof intervaceIp === 'string') || intervaceIp === null) && ((typeof cost === 'number') || cost === null)) {
            return <any>this.updateCostIPv6$java_lang_String$org_hkfree_ospf_model_ospf_Router$java_lang_String$int(linkName, router, intervaceIp, cost);
        } else if (((typeof linkName === 'string') || linkName === null) && ((typeof router === 'string') || router === null) && ((typeof intervaceIp === 'string') || intervaceIp === null) && ((typeof cost === 'number') || cost === null)) {
            return <any>this.updateCostIPv6$java_lang_String$java_lang_String$java_lang_String$int(linkName, router, intervaceIp, cost);
        } else throw new Error('invalid overload');
    }

    public updateCost$java_lang_String$java_lang_String$java_lang_String$int(linkId: string, linkStateId: string, linkData: string, cost: number) {
        for(let index=this.routers.iterator();index.hasNext();) {
            let r = index.next();
            {
                if (r.getId() === linkStateId){
                    this.updateCost$java_lang_String$org_hkfree_ospf_model_ospf_Router$java_lang_String$int(linkId, r, linkData, cost);
                }
            }
        }
    }

    public updateCostIPv6$java_lang_String$java_lang_String$java_lang_String$int(linkId: string, router: string, neighborRouter: string, cost: number) {
        for(let index=this.routers.iterator();index.hasNext();) {
            let r = index.next();
            {
                if (r.getId() === router){
                    this.updateCostIPv6$java_lang_String$org_hkfree_ospf_model_ospf_Router$java_lang_String$int(linkId, r, neighborRouter, cost);
                }
            }
        }
    }

    /**
     * Přidá stub network ke konkrétnímu routeru
     * @param {string} routerId
     * @param {string} linkId
     * @param {number} mask
     * @param {number} cost
     */
    public addStubNetwork(routerId: string, linkId: string, mask: number, cost: number) {
        const r: Router | null = this.getRouterByIp(routerId);
        if (r == null){
            return;
        }
        const sl: StubLink = new StubLink();
        sl.setLinkID(linkId);
        sl.setMask(mask);
        sl.setCost(cost);
        r.getStubs().add(sl);
    }

    public getRouters(): List<Router> {
        return this.routers;
    }

    public getLinks(): List<Link> {
        return this.links;
    }

    public getModelName(): string {
        return this.modelName;
    }

    public setModelName(modelName: string) {
        this.modelName = modelName;
    }

    public setIpv6Loaded(ipv6Loaded: boolean) {
        this.ipv6Loaded = ipv6Loaded;
    }

    public isIpv6Loaded(): boolean {
        return this.ipv6Loaded;
    }

    public isGpsLoaded(): boolean {
        return this.gpsLoaded;
    }

    public setGpsLoaded(gpsLoaded: boolean) {
        this.gpsLoaded = gpsLoaded;
    }

    /**
     * Převede celý OspfModel na MapModel a vrátí jej
     * @return {MapModel}
     */
    public getConvertedWholeModelToMapModel(): MapModel {
        const mapModel: MapModel = new MapModel();
        let multilinkCount: number = 0;
        let cost1: number = 0;
        let cost2: number = 0;
        let cost1IPv6: number = 0;
        let cost2IPv6: number = 0;
        let descr1: string = "";
        let descr2: string = "";
        let id1: string = "";
        let id2: string = "";
        for(let index=this.getLinks().iterator();index.hasNext();) {
            let link = index.next();
            {
                if (link.getRoutersCount() === 2){
                    id1 = link.getOspfLinkData$().get(0).getRouter()?.getId() ?? "";
                    id2 = link.getOspfLinkData$().get(1).getRouter()?.getId() ?? "";
                    if (link.getOspfLinkData$().get(0).getRouter()?.getName() ?? "" === ("")){
                        descr1 = link.getOspfLinkData$().get(0).getRouter()?.getId() ?? "";
                    } else {
                        descr1 = link.getOspfLinkData$().get(0).getRouter()?.getName() ?? "";
                    }
                    if (link.getOspfLinkData$().get(1).getRouter()?.getName() ?? "" === ("")){
                        descr2 = link.getOspfLinkData$().get(1).getRouter()?.getId() ?? "";
                    } else {
                        descr2 = link.getOspfLinkData$().get(1).getRouter()?.getName() ?? "";
                    }
                    cost1 = link.getOspfLinkData$().get(0).getCostIPv4();
                    cost2 = link.getOspfLinkData$().get(1).getCostIPv4();
                    cost1IPv6 = link.getOspfLinkData$().get(0).getCostIPv6();
                    cost2IPv6 = link.getOspfLinkData$().get(1).getCostIPv6();
                    const gp1: GPSPoint | null = link.getOspfLinkData$().get(0).getRouter()?.getGpsPosition() ?? null;
                    const gp2: GPSPoint | null = link.getOspfLinkData$().get(1).getRouter()?.getGpsPosition() ?? null;
                    mapModel.addLinkEdge$java_lang_String$java_lang_String$java_lang_String$java_lang_String$int$int$int$int$org_hkfree_ospf_tools_geo_GPSPoint$org_hkfree_ospf_tools_geo_GPSPoint$java_lang_String$java_lang_String$java_util_List(id1, id2, descr1, descr2, cost1, cost2, cost1IPv6, cost2IPv6, gp1, gp2, link.getLinkIDv4(), link.getLinkIDv6(), link.getOspfLinkData$());
                } else {
                    multilinkCount++;
                    descr2 = "<html><body>" + "Link ID" + ": <b>" + link.getLinkIDv4() + "</b></body></html>";
                    for(let index=link.getOspfLinkData$().iterator();index.hasNext();) {
                        let old = index.next();
                        {
                            id1 = old.getRouter()?.getId() ?? "";
                            const gp: GPSPoint | null = old.getRouter()?.getGpsPosition() ?? null;
                            if (!(old.getRouter()?.getName() ?? "" === (""))){
                                descr1 = old.getRouter()?.getName() ?? "";
                            } else {
                                descr1 = old.getRouter()?.getId() ?? "";
                            }
                            mapModel.addLinkEdge$java_lang_String$java_lang_String$java_lang_String$java_lang_String$int$int$int$int$org_hkfree_ospf_tools_geo_GPSPoint$org_hkfree_ospf_tools_geo_GPSPoint$java_lang_String$java_lang_String$java_util_List(id1, Constants.MULTILINK + /* toString */(''+(multilinkCount)), descr1, descr2, old.getCostIPv4(), -1, old.getCostIPv6(), -1, gp, null, link.getLinkIDv4(), link.getLinkIDv6(), link.getOspfLinkData$());
                        }
                    }
                }
            }
        }
        return mapModel;
    }
}


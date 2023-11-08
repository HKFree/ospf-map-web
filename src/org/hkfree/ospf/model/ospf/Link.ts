/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { IpCalculator } from '../../tools/ip/IpCalculator';
import { Router } from './Router';
import { OspfLinkData } from './OspfLinkData';
import {java, javaemul} from "j4ts";
import List = java.util.List;
import ArrayList = java.util.ArrayList;
import StringHelper = javaemul.internal.StringHelper;

/**
 * Konstruktor - vytvoří instanci třídy
 * @param {string} linkID
 * @param {number} subnetMask
 * @class
 * @author Jakub Menzel
 */
export class Link {
    /*private*/ linkIDv4: string;

    /*private*/ linkIDv6: string;

    /*private*/ subnetMask: number;

    /*private*/ routersOfLink: List<OspfLinkData>;

    /*private*/ networkAddress: string | null;

    /*private*/ broadcastAddress: string | null;

    public constructor(linkID?: any, subnetMask?: any) {
        if (((typeof linkID === 'string') || linkID === null) && ((typeof subnetMask === 'number') || subnetMask === null)) {
            let __args = arguments;
            this.linkIDv4 = "";
            this.linkIDv6 = "";
            this.subnetMask = 0;
            this.routersOfLink = <any>(new ArrayList<OspfLinkData>());
            this.networkAddress = "0.0.0.0";
            this.broadcastAddress = "0.0.0.0";
            this.linkIDv4 = linkID;
            this.subnetMask = subnetMask;
            this.computeSubnetIps();
        } else if (linkID === undefined && subnetMask === undefined) {
            let __args = arguments;
            this.linkIDv4 = "";
            this.linkIDv6 = "";
            this.subnetMask = 0;
            this.routersOfLink = <any>(new ArrayList<OspfLinkData>());
            this.networkAddress = "0.0.0.0";
            this.broadcastAddress = "0.0.0.0";
        } else throw new Error('invalid overload');
    }

    /**
     * Spočítá adresu sítě a broadcastovou adresu spoje
     */
    public computeSubnetIps() {
        this.networkAddress = IpCalculator.getNetworkAddress(this.linkIDv4, this.subnetMask);
        this.broadcastAddress = IpCalculator.getBroadcastAddress(this.linkIDv4, this.subnetMask);
    }

    public getLinkIDv4(): string {
        return this.linkIDv4;
    }

    public setLinkIDv4(linkIDIPv4: string) {
        this.linkIDv4 = linkIDIPv4;
    }

    public setLinkIDv6(linkIDIPv6: string) {
        this.linkIDv6 = linkIDIPv6;
    }

    public getLinkIDv6(): string {
        return this.linkIDv6;
    }

    public addRouter$org_hkfree_ospf_model_ospf_Router(router: Router) {
        const linkData: OspfLinkData = new OspfLinkData();
        linkData.setRouter(router);
        this.routersOfLink.add(linkData);
    }

    public addRouter$org_hkfree_ospf_model_ospf_Router$java_lang_String$int(router: Router, interfaceIp: string, costIPv4: number) {
        const linkData: OspfLinkData = new OspfLinkData();
        linkData.setRouter(router);
        linkData.setInterfaceIp(interfaceIp);
        linkData.setCostIPv4(costIPv4);
        this.routersOfLink.add(linkData);
    }

    /**
     * Metoda, která přidá do spoje záznam o účastníkovi
     * @param {Router} router
     * @param {string} interfaceIp
     * @param cost
     * @param {number} costIPv4
     */
    public addRouter(router?: any, interfaceIp?: any, costIPv4?: any) {
        if (((router != null && router instanceof <any>Router) || router === null) && ((typeof interfaceIp === 'string') || interfaceIp === null) && ((typeof costIPv4 === 'number') || costIPv4 === null)) {
            return <any>this.addRouter$org_hkfree_ospf_model_ospf_Router$java_lang_String$int(router, interfaceIp, costIPv4);
        } else if (((router != null && router instanceof <any>Router) || router === null) && interfaceIp === undefined && costIPv4 === undefined) {
            return <any>this.addRouter$org_hkfree_ospf_model_ospf_Router(router);
        } else throw new Error('invalid overload');
    }

    public getOspfLinkData$org_hkfree_ospf_model_ospf_Router(router: Router): OspfLinkData | null {
        for(let index=this.routersOfLink.iterator();index.hasNext();) {
            let old = index.next();
            {
                if (/* equals */(<any>((o1: any, o2: any) => { if (o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(old.getRouter(),router))){
                    return old;
                }
            }
        }
        return null;
    }

    /**
     * Vrátí OspfLinkData, které reprezentují zučastněný router
     * @param {Router} router router
     * @return {OspfLinkData} linkdata
     */
    public getOspfLinkData(router?: any): any {
        if (((router != null && router instanceof <any>Router) || router === null)) {
            return <any>this.getOspfLinkData$org_hkfree_ospf_model_ospf_Router(router);
        } else if (((typeof router === 'string') || router === null)) {
            return <any>this.getOspfLinkData$java_lang_String(router);
        } else if (router === undefined) {
            return <any>this.getOspfLinkData$();
        } else throw new Error('invalid overload');
    }

    public getOspfLinkData$java_lang_String(routerId: string): OspfLinkData | null {
        for(let index=this.routersOfLink.iterator();index.hasNext();) {
            let old = index.next();
            {
                if (old.getRouter()?.getId() ?? "" === routerId){
                    return old;
                }
            }
        }
        return null;
    }

    /**
     * Metoda, která vrátí seznam routerů spoje s jejich cenami v textovém řetězci
     * @return {string} text
     */
    public routersToString(): string {
        const vzor: string = "%5$10s %1$-20s %2$-20s %5$10s %3$s: %4$d\n";
        let text: string = "";
        for(let index=this.routersOfLink.iterator();index.hasNext();) {
            let old = index.next();
            {
                text += StringHelper.format(vzor, old.getRouter()?.getId() ?? "", "(" + old.getInterfaceIp() + ")", "cost", old.getCostIPv4(), "");
            }
        }
        return text;
    }

    /**
     * Metoda, která zjistí zdali je zadaný router účastníkem spoje
     * @return {boolean} boolean
     * @param {Router} router
     */
    public containsRouter(router: Router): boolean {
        for(let index=this.routersOfLink.iterator();index.hasNext();) {
            let old = index.next();
            {
                if (/* equals */(<any>((o1: any, o2: any) => { if (o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(old.getRouter(),router))){
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Metoda, která upraví cenu u zadaného routeru spoje
     * @param {Router} router
     * @param {string} interfaceIp
     * @param {number} cost
     */
    public updateLinkData(router: Router, interfaceIp: string, cost: number) {
        for(let index=this.routersOfLink.iterator();index.hasNext();) {
            let old = index.next();
            {
                if (/* equals */(<any>((o1: any, o2: any) => { if (o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(old.getRouter(),router))){
                    old.setCostIPv4(cost);
                    old.setInterfaceIp(interfaceIp);
                }
            }
        }
    }

    public updateLinkDataIPv6(router: Router, interfaceIp: string, cost: number) {
        for(let index=this.routersOfLink.iterator();index.hasNext();) {
            let old = index.next();
            {
                if (/* equals */(<any>((o1: any, o2: any) => { if (o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(old.getRouter(),router))){
                    old.setCostIPv6(cost);
                }
            }
        }
    }

    /**
     * Metoda, která vrátí počet routerů, které jsou účastníky spoje
     * @return {number} count
     */
    public getRoutersCount(): number {
        return this.routersOfLink.size();
    }

    public getOspfLinkData$(): List<OspfLinkData> {
        return this.routersOfLink;
    }

    /**
     * Vrací masku spoje
     * @return {number} mask
     */
    public getSubnetMask(): number {
        return this.subnetMask;
    }

    /**
     * Nastavuje masku spoje
     * @param {number} subnetMask
     */
    public setSubnetMask(subnetMask: number) {
        this.subnetMask = subnetMask;
    }

    /**
     * Vrací adresu sítě spoje
     * @return {string} address
     */
    public getNetworkAddress(): string | null {
        return this.networkAddress;
    }

    /**
     * Vrací broadcastovou adresu spoje
     * @return {string} address
     */
    public getBroadcastAddress(): string | null {
        return this.broadcastAddress;
    }

    /**
     * Vrací příznak, zda se jedná o spoj, který není úspěšně načten
     * @return {boolean} boolean
     */
    public isNotCompletelyLoad(): boolean {
        let actualMultilinkRemData: List<OspfLinkData> = new ArrayList<OspfLinkData>();
        for(let index=this.routersOfLink.iterator();index.hasNext();) {
            let old = index.next();
            {
                if (this.routersOfLink.size() === 2){
                    if (old.getCostIPv4() === -1 && old.getCostIPv6() === -1){
                        return true;
                    }
                } else {
                    if (old.getCostIPv4() === -1 && old.getCostIPv6() === -1){
                        actualMultilinkRemData.add(old);
                    }
                }
            }
        }
        if (actualMultilinkRemData != null && actualMultilinkRemData.size() > 0){
            for(let index=actualMultilinkRemData.iterator();index.hasNext();) {
                let aold = index.next();
                {
                    this.routersOfLink.remove(aold);
                }
            }
            if (this.routersOfLink.size() < 2){
                return true;
            }
        }
        return false;
    }

    /**
     * zjisti zda spoj obsahuje stejny pocet routeru se stejnymi id routeru
     * @return
     * @param {*} routers
     * @return {boolean}
     */
    public hasSameRouters(routers: List<OspfLinkData>): boolean {
        if (routers.size() !== this.routersOfLink.size()){
            return false;
        }
        for(let i: number = 0; i < routers.size(); i++) {{
            if (!(this.routersOfLink.get(i).getRouter()?.getId() ?? "" === routers.get(i).getRouter()?.getId() ?? ""))return false;
        };}
        return true;
    }
}






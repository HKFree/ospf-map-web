/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
//import { MapGraphComponent } from '../../../gui/mappanel/MapGraphComponent';
//import { MapGraphComponentMode } from '../../../setting/MapGraphComponentMode';
import { AEdge } from './AEdge';
import { IVertex } from '../IVertex';
import { RouterVertex } from './RouterVertex';

/**
 * Konstruktor
 * @class
 * @extends AEdge
 * @author Jakub Menzel
 */
export class LinkEdge extends AEdge {
    /*private*/ //graphComponent: MapGraphComponent;

    /*private*/ vertex1: RouterVertex | null;

    /*private*/ vertex2: RouterVertex | null;

    /*private*/ cost1: number;

    /*private*/ cost2: number;

    /*private*/ cost1IPv6: number;

    /*private*/ cost2IPv6: number;

    /*private*/ linkEdgeIDv4: string;

    /*private*/ linkEdgeIDv6: string;

    /*private*/ faultCount: number;

    /*private*/ faultIntensity: number;

    /*private*/ edgeOfShortestPath: boolean;

    /*private*/ actuallyLive: boolean;

    /*private*/ actuallyDead: boolean;

    /*private*/ extraAddedEdge: boolean;

    /*private*/ edgeOfFirstPath: boolean;

    /*private*/ edgeOfSecondPath: boolean;

    public constructor() {
        super();
        this.vertex1 = null;
        this.vertex2 = null;
        this.cost1 = 0;
        this.cost2 = 0;
        this.cost1IPv6 = 0;
        this.cost2IPv6 = 0;
        this.linkEdgeIDv4 = "";
        this.linkEdgeIDv6 = "";
        this.faultCount = 0;
        this.faultIntensity = 0.0;
        this.edgeOfShortestPath = false;
        this.actuallyLive = false;
        this.actuallyDead = false;
        this.extraAddedEdge = false;
        this.edgeOfFirstPath = false;
        this.edgeOfSecondPath = false;
    }

    /**
     * 
     * @return {string}
     */
    public getLabel(): string | null {
        // TODO ?
        // if (!this.graphComponent.isShowIPv6() && !this.isIPv4() && this.isIPv6()){
        //     return null;
        // }
        let result: string = "";
        if (!this.isEnabled()){
            return result;
        }
        if (!/* isEmpty */(this.linkEdgeIDv4.length === 0)){
            result += /* toString */(''+(this.getCost1v4()));
            if (!this.vertex2?.isMultilink()){
                result += " - " + /* toString */(''+(this.getCost2v4()));
            }
            // TODO ?
            // if (this.graphComponent.isShowIPv6()){
            //     result = "(" + result + ")v4";
            // }
        }
        // TODO
        // if (!/* isEmpty */(this.linkEdgeIDv4.length === 0) && !/* isEmpty */(this.linkEdgeIDv6.length === 0) && this.graphComponent.isShowIPv6()){
        //     result += " ";
        // }
        // TODO
        // if (!/* isEmpty */(this.linkEdgeIDv6.length === 0) && this.graphComponent.isShowIPv6()){
        //     result += "(" + /* toString */(''+(this.getCost1v6()));
        //     if (!this.vertex2.isMultilink()){
        //         result += " - " + /* toString */(''+(this.getCost2v6()));
        //     }
        //     result += ")v6";
        // }
        return result;
    }

    /**
     * 
     * @return {string}
     */
    public getDescription(): string | null {
        // TODO ?
        // if (!this.graphComponent.isShowIPv6() && !this.isIPv4() && this.isIPv6()){
        //     return null;
        // }
        let result: string = "<html><body>";
        if (!/* isEmpty */(this.linkEdgeIDv4.length === 0)){
            result += "<b>IPv4 " + "Link" + "</b> ";
            result += "<br>ID: <b>" + this.linkEdgeIDv4 + "</b>";
            result += "<br>" + "Costs into link from routers" + ":";
            result += "<br>" + this.vertex1?.getLabel() + " (" + this.vertex1?.getInfo() + "): " + /* toString */(''+(this.cost1)) + "";
            if (!this.vertex2?.isMultilink()){
                result += "<br>" + this.vertex2?.getLabel() + " (" + this.vertex2?.getInfo() + "): " + /* toString */(''+(this.cost2)) + "";
            }
        }
        if (!/* isEmpty */(this.linkEdgeIDv4.length === 0) && !/* isEmpty */(this.linkEdgeIDv6.length === 0)){
            result += "<br><br>";
        }
        if (!/* isEmpty */(this.linkEdgeIDv6.length === 0)){
            result += "<b>IPv6 " + "Link" + "</b> ";
            result += "<br>ID: <b>" + this.linkEdgeIDv6 + "</b>";
            result += "<br>" + "Costs into link from routers" + ":";
            result += "<br>" + this.vertex1?.getLabel() + " (" + this.vertex1?.getInfo() + "): " + /* toString */(''+(this.cost1IPv6)) + "";
            if (!this.vertex2?.isMultilink()){
                result += "<br>" + this.vertex2?.getLabel() + " (" + this.vertex2?.getInfo() + "): " + /* toString */(''+(this.cost2IPv6)) + "";
            }
        }
        result += "</body></html>";
        return result;
    }

    /**
     * 
     * @return {*}
     */
    public getLineColor(): string {
        // TODO ?
        // if (!this.graphComponent.isShowIPv6() && !this.isIPv4() && this.isIPv6()){
        //     return "";
        // }
        if (this.isHover()){
            return "orange";
        }
        if (!this.isEnabled()){
            return "red";
            // TODO return new Color(13421772);
        }
        // TODO ?
        // if (this.isIPv6() && this.graphComponent.isShowIPv6()){
        //     return "green";
        // }
        // TODO ?
        //if (this.graphComponent.getMapGraphComponentMode() === MapGraphComponentMode.ASYMETRIC_LINK && !this.isSymetric()){
        //    return "red";
        //    // TODO return new Color(0, 150, 255);
        //}
        if (this.isEdgeOfShortestPath() || (this.isEdgeOfFirstPath() && this.isEdgeOfSecondPath())){
            return "green";
        }
        if (this.isEdgeOfFirstPath()){
            return "red";
            // TODO return new Color(0, 187, 227);
        }
        if (this.isEdgeOfSecondPath()){
            return "red";
            // TODO return new Color(255, 80, 80);
        }
        return "blue";
        //return new Color(6710886);
    }

    /**
     * 
     * @return {*}
     */
    public getStroker(): number {
        return 1;
        // TODO
        // if (!this.graphComponent.isShowIPv6() && !this.isIPv4() && this.isIPv6()){
        //     return null;
        // }
        // if (this.isHover()){
        //     return new BasicStroke(3);
        // }
        // if (!this.isEnabled()){
        //     return RenderContext.DASHED;
        // }
        // if (this.isEdgeOfShortestPath() || this.isEdgeOfFirstPath() || this.isEdgeOfSecondPath()){
        //     return new BasicStroke(3);
        // }
        // return new BasicStroke(1);
    }

    /**
     * Vrací popisek s počtem výpadků spoje
     * @return {string} description
     */
    public getLinkFaultDescription(): string {
        // TODO?
        // if (!this.graphComponent.isShowIPv6() && !this.isIPv4() && this.isIPv6()){
        //     return "";
        // }
        return "<html><body>" + "Link ID" + ": <b>" + this.linkEdgeIDv4 + "</b><br><br>" + "Failures count" + ":<br> <b>" + this.faultCount + "</b></body></html>";
    }

    public getCost1v4(): number {
        return this.cost1;
    }

    public getCost2v4(): number {
        return this.cost2;
    }

    public getCost1v6(): number {
        return this.cost1IPv6;
    }

    public getCost2v6(): number {
        return this.cost2IPv6;
    }

    public setCost1v6(cost1iPv6: number) {
        this.cost1IPv6 = cost1iPv6;
    }

    public setCost2v6(cost2iPv6: number) {
        this.cost2IPv6 = cost2iPv6;
    }

    public setCost1v4(cost: number) {
        this.cost1 = cost;
    }

    public setCost2v4(cost: number) {
        this.cost2 = cost;
    }

    /**
     * Metoda, která vrátí instanci prvního vrcholu
     * @return {RouterVertex} rv
     */
    public getVertex1(): IVertex | null {
        return this.vertex1;
    }

    /**
     * Metoda, která vrátí instanci druhého vrcholu
     * @return {RouterVertex} rv
     */
    public getVertex2(): IVertex | null {
        return this.vertex2;
    }

    public setVertex1$org_hkfree_ospf_model_map_impl_RouterVertex(vertex1: RouterVertex) {
        this.vertex1 = vertex1;
    }

    /**
     * Metoda, která nastaví instanci prvního vrcholu
     * @param routerVertex1
     * @param {RouterVertex} vertex1
     */
    public setVertex1(vertex1?: any) {
        if (((vertex1 != null && vertex1 instanceof <any>RouterVertex) || vertex1 === null)) {
            return <any>this.setVertex1$org_hkfree_ospf_model_map_impl_RouterVertex(vertex1);
        } else if (((vertex1 != null && (vertex1.constructor != null && vertex1.constructor["__interfaces"] != null && vertex1.constructor["__interfaces"].indexOf("org.hkfree.ospf.model.map.IVertex") >= 0)) || vertex1 === null)) {
            super.setVertex1(vertex1);
        } else throw new Error('invalid overload');
    }

    public setVertex2$org_hkfree_ospf_model_map_impl_RouterVertex(vertex2: RouterVertex) {
        this.vertex2 = vertex2;
    }

    /**
     * Metoda, která nastaví instanci druhého vrcholu
     * @param routerVertex2
     * @param {RouterVertex} vertex2
     */
    public setVertex2(vertex2?: any) {
        if (((vertex2 != null && vertex2 instanceof <any>RouterVertex) || vertex2 === null)) {
            return <any>this.setVertex2$org_hkfree_ospf_model_map_impl_RouterVertex(vertex2);
        } else if (((vertex2 != null && (vertex2.constructor != null && vertex2.constructor["__interfaces"] != null && vertex2.constructor["__interfaces"].indexOf("org.hkfree.ospf.model.map.IVertex") >= 0)) || vertex2 === null)) {
            super.setVertex2(vertex2);
        } else throw new Error('invalid overload');
    }

    /**
     * vrátí id spoje pro IPv4
     * @return {string} linkId
     */
    public getLinkIDv4(): string {
        return this.linkEdgeIDv4;
    }

    /**
     * nastaví id spoje pro IPv4
     * @param {string} linkEdgeID
     */
    public setLinkIDv4(linkEdgeID: string) {
        this.linkEdgeIDv4 = linkEdgeID;
    }

    /**
     * vrátí id spoje pro IPv6
     * @return {string} linkId
     */
    public getLinkIDv6(): string {
        return this.linkEdgeIDv6;
    }

    /**
     * nastaví id spoje pro IPv6
     * @param {string} linkEdgeID
     */
    public setLinkIDv6(linkEdgeID: string) {
        this.linkEdgeIDv6 = linkEdgeID;
    }

    /**
     * Nastavuje příznak, zda se jedná o hranu stromu nejkratších cest
     * @param {boolean} isEdgeOfShortestPath
     */
    public setEdgeOfShortestPath(isEdgeOfShortestPath: boolean) {
        this.edgeOfShortestPath = isEdgeOfShortestPath;
    }

    /**
     * Vrací příznak, zda se jedná o hranu stromu nejkratších cest
     * @return {boolean} boolean
     */
    public isEdgeOfShortestPath(): boolean {
        return this.edgeOfShortestPath;
    }

    /**
     * Vrací, zda se jedná o aktuálně naběhlý spoj
     * @return {boolean} boolean
     */
    public isActuallyLive(): boolean {
        return this.actuallyLive;
    }

    /**
     * Nastavuje, zda se jedná o aktuálně naběhlý spoj
     * @param {boolean} isActuallyLive
     */
    public setActuallyLive(isActuallyLive: boolean) {
        this.actuallyLive = isActuallyLive;
    }

    /**
     * Vrací, zda se jedná o aktuálně spadlý spoj
     * @return {boolean} boolean
     */
    public isActuallyDead(): boolean {
        return this.actuallyDead;
    }

    /**
     * Nastavuje, zda se jedná o aktuálně spadlý spoj
     * @param {boolean} isActuallyDead
     */
    public setActuallyDead(isActuallyDead: boolean) {
        this.actuallyDead = isActuallyDead;
    }

    /**
     * Metoda, která vrátí příznak, zda je hrana součástí multispoje
     * @return {boolean} boolean
     */
    public isEdgeOfMultilink(): boolean {
        if (this.vertex2 != null)return this.vertex2.isMultilink(); else return false;
    }

    /**
     * Vrací příznak, zda se jedná o extra přidanou hranu při tvorbě topologie
     * @return {boolean} boolean
     */
    public isExtraAddedEdge(): boolean {
        return this.extraAddedEdge;
    }

    /**
     * Nastavuje příznak, zda se jedná o extra přidanou hranu při tvorbě topologie
     * @param {boolean} isExtraAddedEdge
     */
    public setExtraAddedEdge(isExtraAddedEdge: boolean) {
        this.extraAddedEdge = isExtraAddedEdge;
    }

    /**
     * Vrací intenzitu výpadků pro obarvení hrany (max je 255)
     * @return {number} intensity
     */
    public getFaultIntensity(): number {
        return this.faultIntensity;
    }

    /**
     * Nastavuje intenzitu výpadků pro obarvení hrany
     * @param {number} faultIntensity
     */
    public setFaultIntensity(faultIntensity: number) {
        this.faultIntensity = faultIntensity;
    }

    /**
     * Vrací počet výpadků spoje
     * @return {number} count
     */
    public getFaultCount(): number {
        return this.faultCount;
    }

    /**
     * Nastavuje počet výpadků spoje
     * @param {number} faultCount
     */
    public setFaultCount(faultCount: number) {
        this.faultCount = faultCount;
    }

    /**
     * Vrací příznak, že se jedná o součást první nejkratší cesty mezi dvěma routery
     * @return {boolean} the isEdgeOfFirstPath
     */
    public isEdgeOfFirstPath(): boolean {
        return this.edgeOfFirstPath;
    }

    /**
     * Nastavuje příznak, že se jedná o součást první nejkratší cesty mezi dvěma routery
     * @param {boolean} isEdgeOfFirstPath the isEdgeOfFirstPath to set
     */
    public setEdgeOfFirstPath(isEdgeOfFirstPath: boolean) {
        this.edgeOfFirstPath = isEdgeOfFirstPath;
    }

    /**
     * Vrací příznak, že se jedná o součást druhé nejkratší cesty mezi dvěma routery
     * @return {boolean} the isEdgeOfSecondPath
     */
    public isEdgeOfSecondPath(): boolean {
        return this.edgeOfSecondPath;
    }

    /**
     * Nastavuje příznak, že se jedná o součást druhé nejkratší cesty mezi dvěma routery
     * @param {boolean} isEdgeOfSecondPath the isEdgeOfSecondPath to set
     */
    public setEdgeOfSecondPath(isEdgeOfSecondPath: boolean) {
        this.edgeOfSecondPath = isEdgeOfSecondPath;
    }

    /**
     * Vrací příznak zda se jedná o symetrický spoj
     * @return
     * @return {boolean}
     * @private
     */
    /*private*/ isSymetric(): boolean {
        throw new Error('not implemented yet');
        if (this.isEdgeOfMultilink()){
            // for(let index=this.graphComponent.getMapModel().getLinkEdges().iterator();index.hasNext();) {
            //     let le = index.next();
            //     {
            //         if (le.getVertex2() === this.vertex2){
            //             if (le.getCost1v4() !== this.cost1){
            //                 return false;
            //             }
            //         }
            //     }
            // }
            return true;
        }
        return this.cost1 === this.cost2;
    }

    /**
     * Vraci zda je spoj obsazen v IPv4
     * @return
     * @return {boolean}
     */
    public isIPv4(): boolean {
        return (this.cost1 !== -1 || this.cost2 !== -1);
    }

    /**
     * Vraci zda je spoj obsazen v IPv6
     * @return
     * @return {boolean}
     */
    public isIPv6(): boolean {
        return (this.cost1IPv6 !== -1 || this.cost2IPv6 !== -1);
    }
}







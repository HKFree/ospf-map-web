/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { Constants } from '../Constants';
import { IMapModel } from '../IMapModel';
import { LinkEdge } from './impl/LinkEdge';
import { RouterVertex } from './impl/RouterVertex';
import { OspfLinkData } from '../ospf/OspfLinkData';
import { NeighbourCostAndLink } from '../../tools/NeighbourCostAndLink';
import { GPSPoint } from '../../tools/geo/GPSPoint';
import { IVertex } from './IVertex';
import { IEdge } from './IEdge';
import {java} from "j4ts";
import List = java.util.List;
import ArrayList = java.util.ArrayList;

/**
 * Konstruktor - vytvoří instanci třídy
 * @class
 * @author Jakub Menzel
 */
export class MapModel implements IMapModel {
    /*private*/ edges: List<IEdge>;

    /*private*/ vertices: List<IVertex>;

    public constructor() {
        this.edges = <any>(new ArrayList<IEdge>());
        this.vertices = <any>(new ArrayList<IVertex>());
    }

    public addLinkEdge$java_lang_String$java_lang_String$java_lang_String$java_lang_String$int$int$int$int$org_hkfree_ospf_tools_geo_GPSPoint$org_hkfree_ospf_tools_geo_GPSPoint$java_lang_String$java_lang_String$java_util_List(id1: string, id2: string, name1: string, name2: string, cost1: number, cost2: number, cost1IPv6: number, cost2IPv6: number, gpsP1: GPSPoint | null, gpsP2: GPSPoint | null, linkIDv4: string, linkIDv6: string, ospfLinksData: List<OspfLinkData>) {
        if (id1 === "" || id2 === ""){
            throw new Error("Router ID is empty!");
        }
        if (name1 === "" || name2 === ""){
            debugger;
            throw new Error("Router Name is empty!");
        }
        let rv1: RouterVertex | null = this.getRouterVertexById(id1);
        let rv2: RouterVertex | null = this.getRouterVertexById(id2);
        if (rv1 == null){
            rv1 = new RouterVertex(id1, name1, gpsP1);
            this.vertices.add(rv1);
            if (/* contains */(id1.indexOf(Constants.MULTILINK) != -1)){
                rv1.setMultilink(true);
            }
        }
        if (rv2 == null){
            rv2 = new RouterVertex(id2, name2, gpsP2);
            this.vertices.add(rv2);
            if (/* contains */(id2.indexOf(Constants.MULTILINK) != -1)){
                rv2.setMultilink(true);
            }
        }
        const le: LinkEdge = new LinkEdge();
        le.setVertex1$org_hkfree_ospf_model_map_impl_RouterVertex(rv1);
        le.setVertex2$org_hkfree_ospf_model_map_impl_RouterVertex(rv2);
        le.setCost1v4(cost1);
        le.setCost2v4(cost2);
        le.setCost1v6(cost1IPv6);
        le.setCost2v6(cost2IPv6);
        le.setLinkIDv4(linkIDv4);
        le.setLinkIDv6(linkIDv6);
        this.edges.add(le);
    }

    /**
     * Metoda, která vytvoří instanci hrany dle na základě zadaných parametrů
     * @param {string} id1
     * @param {string} id2
     * @param {string} name1
     * @param {string} name2
     * @param {number} cost1
     * @param {number} cost2
     * @param {GPSPoint} gpsP1
     * @param {GPSPoint} gpsP2
     * @param {string} linkIDv4
     * @param {*} ospfLinksData
     * @param {number} cost1IPv6
     * @param {number} cost2IPv6
     * @param {string} linkIDv6
     */
    public addLinkEdge(id1?: any, id2?: any, name1?: any, name2?: any, cost1?: any, cost2?: any, cost1IPv6?: any, cost2IPv6?: any, gpsP1?: any, gpsP2?: any, linkIDv4?: any, linkIDv6?: any, ospfLinksData?: any) {
        if (((typeof id1 === 'string') || id1 === null) && ((typeof id2 === 'string') || id2 === null) && ((typeof name1 === 'string') || name1 === null) && ((typeof name2 === 'string') || name2 === null) && ((typeof cost1 === 'number') || cost1 === null) && ((typeof cost2 === 'number') || cost2 === null) && ((typeof cost1IPv6 === 'number') || cost1IPv6 === null) && ((typeof cost2IPv6 === 'number') || cost2IPv6 === null) && ((gpsP1 != null && gpsP1 instanceof <any>GPSPoint) || gpsP1 === null) && ((gpsP2 != null && gpsP2 instanceof <any>GPSPoint) || gpsP2 === null) && ((typeof linkIDv4 === 'string') || linkIDv4 === null) && ((typeof linkIDv6 === 'string') || linkIDv6 === null) && ((ospfLinksData != null && (ospfLinksData.constructor != null && ospfLinksData.constructor["__interfaces"] != null && ospfLinksData.constructor["__interfaces"].indexOf("java.util.List") >= 0)) || ospfLinksData === null)) {
            return <any>this.addLinkEdge$java_lang_String$java_lang_String$java_lang_String$java_lang_String$int$int$int$int$org_hkfree_ospf_tools_geo_GPSPoint$org_hkfree_ospf_tools_geo_GPSPoint$java_lang_String$java_lang_String$java_util_List(id1, id2, name1, name2, cost1, cost2, cost1IPv6, cost2IPv6, gpsP1, gpsP2, linkIDv4, linkIDv6, ospfLinksData);
        } else if (((id1 != null && id1 instanceof <any>RouterVertex) || id1 === null) && ((id2 != null && id2 instanceof <any>RouterVertex) || id2 === null) && ((typeof name1 === 'number') || name1 === null) && ((typeof name2 === 'number') || name2 === null) && ((typeof cost1 === 'string') || cost1 === null) && cost2 === undefined && cost1IPv6 === undefined && cost2IPv6 === undefined && gpsP1 === undefined && gpsP2 === undefined && linkIDv4 === undefined && linkIDv6 === undefined && ospfLinksData === undefined) {
            return <any>this.addLinkEdge$org_hkfree_ospf_model_map_impl_RouterVertex$org_hkfree_ospf_model_map_impl_RouterVertex$int$int$java_lang_String(id1, id2, name1, name2, cost1);
        } else throw new Error('invalid overload');
    }

    public addLinkEdge$org_hkfree_ospf_model_map_impl_RouterVertex$org_hkfree_ospf_model_map_impl_RouterVertex$int$int$java_lang_String(rv1: RouterVertex, rv2: RouterVertex, cost1: number, cost2: number, linkID: string): LinkEdge {
        const le: LinkEdge = new LinkEdge();
        le.setLinkIDv4(linkID);
        return <LinkEdge><any>this.edges.get(this.edges.size() - 1);
    }

    /**
     * Nalezne routerVertex dle id a vrati ho
     * @param {string} id
     * @return {RouterVertex} pokud nenalezne, vraci null
     * @private
     */
    /*private*/ getRouterVertexById(id: string): RouterVertex | null {
        for(let index=this.vertices.iterator();index.hasNext();) {
            let rv = index.next();
            {
                if (rv != null && rv instanceof <any>RouterVertex){
                    if ((<RouterVertex><any>rv).getInfo() === id){
                        return <RouterVertex><any>rv;
                    }
                }
            }
        }
        return null;
    }

    /**
     * 
     * @return {*}
     */
    public getEdges(): List<IEdge> {
        return this.edges;
    }

    /**
     * 
     * @return {*}
     */
    public getVertices(): List<IVertex> {
        return this.vertices;
    }

    /**
     * Vraci vsechny hrany typu LinkEdge
     * @return
     * @return {*}
     */
    public getLinkEdges(): List<LinkEdge> {
        const les: List<LinkEdge> = <any>(new ArrayList<LinkEdge>());
        for(let index=this.edges.iterator();index.hasNext();) {
            let e = index.next();
            {
                if (e != null && e instanceof <any>LinkEdge){
                    les.add(<LinkEdge><any>e);
                }
            }
        }
        return les;
    }

    /**
     * Vraci vsechny vrcholy typu RouterVertex
     * @return
     * @return {*}
     */
    public getRouterVertices(): List<RouterVertex> {
        const rvs: List<RouterVertex> = <any>(new ArrayList<RouterVertex>());
        for(let index=this.vertices.iterator();index.hasNext();) {
            let v = index.next();
            {
                if (v != null && v instanceof <any>RouterVertex){
                    rvs.add(<RouterVertex><any>v);
                }
            }
        }
        return rvs;
    }

    /**
     * Metoda, která vrátí index zadaného vrcholu v Listu vrcholů
     * @return {*} les
     * @param {RouterVertex} v
     */
    public getIncidentEdges(v: RouterVertex): List<LinkEdge> {
        const incidentEdges: List<LinkEdge> = <any>(new ArrayList<LinkEdge>());
        for(let index=this.getLinkEdges().iterator();index.hasNext();) {
            let le = index.next();
            {
                if (/* equals */(<any>((o1: any, o2: any) => { if (o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(le.getVertex1(),v)) || /* equals */(<any>((o1: any, o2: any) => { if (o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(le.getVertex2(),v))){
                    incidentEdges.add(le);
                }
            }
        }
        return incidentEdges;
    }

    /**
     * Vrací maximální hodnotu zeměpisné šířky
     * @return {number} double
     */
    public getMaximumLatitude(): number {
        let max: number = 0.0;
        for(let index=this.getRouterVertices().iterator();index.hasNext();) {
            let rv = index.next();
            {
                if (rv.getGpsLatitude() > max){
                    max = rv.getGpsLatitude();
                }
            }
        }
        return max;
    }

    /**
     * Vrací minimální hodnotu zeměpisné šířky
     * @return {number} double
     */
    public getMinimumLatitude(): number {
        let min: number = 0.0;
        for(let index=this.getRouterVertices().iterator();index.hasNext();) {
            let rv = index.next();
            {
                if ((rv.getGpsLatitude() < min && rv.getGpsLatitude() !== 0) || min === 0){
                    min = rv.getGpsLatitude();
                }
            }
        }
        return min;
    }

    /**
     * Vrací maximální hodnotu zeměpisné délky
     * @return {number} double
     */
    public getMaximumLongtitude(): number {
        let max: number = 0.0;
        for(let index=this.getRouterVertices().iterator();index.hasNext();) {
            let rv = index.next();
            {
                if (rv.getGpsLongtitude() > max){
                    max = rv.getGpsLongtitude();
                }
            }
        }
        return max;
    }

    /**
     * Vrací minimáln hodnotu zeměpisné délky
     * @return {number} double
     */
    public getMinimumLongtitude(): number {
        let min: number = 0.0;
        for(let index=this.getRouterVertices().iterator();index.hasNext();) {
            let rv = index.next();
            {
                if ((rv.getGpsLongtitude() < min && rv.getGpsLongtitude() !== 0) || min === 0){
                    min = rv.getGpsLongtitude();
                }
            }
        }
        return min;
    }

    /**
     * Vrací příznak, zda má model dva a více routerů s definovanými zeměpisnými souřadnicemi
     * @return {boolean} boolean
     */
    public hasMoreRouterWithGPSPositions(): boolean {
        let twoAndMore: boolean = false;
        for(let index=this.getRouterVertices().iterator();index.hasNext();) {
            let rv = index.next();
            {
                if (rv.getGpsLatitude() !== 0 && rv.getGpsLongtitude() !== 0){
                    if (twoAndMore){
                        return true;
                    } else {
                        twoAndMore = true;
                    }
                }
            }
        }
        return false;
    }

    /**
     * 
     * @param {RouterVertex} routerVertex
     * @return {*}
     */
    public getNeighboursWithCosts(routerVertex: RouterVertex): List<NeighbourCostAndLink> {
        const neighbours: List<NeighbourCostAndLink> = <any>(new ArrayList<NeighbourCostAndLink>());
        for(let index=this.getLinkEdges().iterator();index.hasNext();) {
            let le = index.next();
            {
                if ((/* equals */(<any>((o1: any, o2: any) => { if (o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(le.getVertex1(),routerVertex)) || /* equals */(<any>((o1: any, o2: any) => { if (o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(le.getVertex2(),routerVertex))) && le.isEnabled()){
                    if (!(<LinkEdge>le).isEdgeOfMultilink()){
                        if (/* equals */(<any>((o1: any, o2: any) => { if (o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(le.getVertex1(),routerVertex))){
                            neighbours.add(new NeighbourCostAndLink(<RouterVertex>le.getVertex2(), le.getCost1v4(), le));
                        } else {
                            neighbours.add(new NeighbourCostAndLink(<RouterVertex>le.getVertex1(), le.getCost2v4(), le));
                        }
                    } else {
                        const mcost: number = le.getCost1v4();
                        for(let index=this.getIncidentEdges(<RouterVertex>le.getVertex2()).iterator();index.hasNext();) {
                            let mle = index.next();
                            {
                                if (!/* equals */(<any>((o1: any, o2: any) => { if (o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(mle.getVertex1(),routerVertex)) && mle.isEnabled())neighbours.add(new NeighbourCostAndLink(<RouterVertex>mle.getVertex1(), mcost, le));
                            }
                        }
                    }
                }
            }
        }
        return neighbours;
    }

    /**
     * 
     * @param {RouterVertex} router
     * @param {RouterVertex} multilinkvertex
     * @return {LinkEdge}
     */
    public getMultilinkEdge(router: RouterVertex, multilinkvertex: RouterVertex): LinkEdge | null {
        for(let index=this.getLinkEdges().iterator();index.hasNext();) {
            let le = index.next();
            {
                if (/* equals */(<any>((o1: any, o2: any) => { if (o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(le.getVertex1(),router)) && /* equals */(<any>((o1: any, o2: any) => { if (o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(le.getVertex2(),multilinkvertex))){
                    return <LinkEdge>le;
                }
            }
        }
        return null;
    }
}







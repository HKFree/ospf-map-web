/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { LinkEdge } from '../model/map/impl/LinkEdge';
import { RouterVertex } from '../model/map/impl/RouterVertex';

/**
 * Konstruktor
 * @param {RouterVertex} neighbour
 * @param {number} cost
 * @param {LinkEdge} linkEdge
 * @class
 * @author Jakub Menzel
 */
export class NeighbourCostAndLink {
    /*private*/ neighbour: RouterVertex | null;

    /*private*/ cost: number;

    /*private*/ linkEdge: LinkEdge | null;

    public constructor(neighbour: RouterVertex, cost: number, linkEdge: LinkEdge) {
        this.neighbour = null;
        this.cost = 0;
        this.linkEdge = null;
        this.neighbour = neighbour;
        this.cost = cost;
        this.linkEdge = linkEdge;
    }

    /**
     * Vrací sousední router
     * @return {RouterVertex} rv
     */
    public getNeighbour(): RouterVertex {
        return <RouterVertex>this.neighbour;
    }

    /**
     * Nastavuje sousední router
     * @param {RouterVertex} neighbour
     */
    public setNeighbour(neighbour: RouterVertex) {
        this.neighbour = neighbour;
    }

    /**
     * Vrací cenu
     * @return {number} cost
     */
    public getCost(): number {
        return this.cost;
    }

    /**
     * Nastavuje cenu
     * @param {number} cost
     */
    public setCost(cost: number) {
        this.cost = cost;
    }

    /**
     * Vrací spoj
     * @return {LinkEdge} le
     */
    public getLinkEdge(): LinkEdge {
        return <LinkEdge>this.linkEdge;
    }

    /**
     * Nastavuje spoj
     * @param {LinkEdge} linkEdge
     */
    public setLinkEdge(linkEdge: LinkEdge) {
        this.linkEdge = linkEdge;
    }
}




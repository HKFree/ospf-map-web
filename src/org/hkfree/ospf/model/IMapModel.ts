/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { IEdge } from './map/IEdge';
import { IVertex } from './map/IVertex';
import { LinkEdge } from './map/impl/LinkEdge';
import { RouterVertex } from './map/impl/RouterVertex';
import { NeighbourCostAndLink } from '../tools/NeighbourCostAndLink';
import {java} from "j4ts";
import List = java.util.List;

/**
 * Rozhraní modelu grafu (mapy)
 * @author Jakub Menzel
 * @author Jan Schovánek
 * @class
 */
export interface IMapModel {
    /**
     * Vraci vsechny vrcholy map modelu
     * @return
     * @return {*}
     */
    getVertices(): List<IVertex>;

    /**
     * Vraci vsechny hrany map modelu
     * @return
     * @return {*}
     */
    getEdges(): List<IEdge>;

    /**
     * Vrací seznam sousedních routerů s cenami daného routeru
     * @param routerVertex
     * @return {*} NeighbourCostAndLink
     * @param {RouterVertex} r
     */
    getNeighboursWithCosts(r: RouterVertex): List<NeighbourCostAndLink>;

    /**
     * Vrací hranu multispoje mezi danými vrcholy
     * @param {RouterVertex} router
     * @param multilinkvertex
     * @return {LinkEdge} le
     * @param {RouterVertex} multilinkVertex
     */
    getMultilinkEdge(router: RouterVertex, multilinkVertex: RouterVertex): LinkEdge | null;
}



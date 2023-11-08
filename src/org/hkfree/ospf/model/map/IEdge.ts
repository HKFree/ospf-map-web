/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
export interface IEdge {
    isEnabled(): boolean;

    setEnabled(enabled: boolean) : void;

    isHover(): boolean;

    setHover(hover: boolean) : void;

    /**
     * Vrací první vrchol hrany
     * @return
     * @return {*}
     */
    getVertex1(): IVertex | null;

    /**
     * Vrací druhý vrchol hrany
     * @return
     * @return {*}
     */
    getVertex2(): IVertex | null;

    /**
     * Vrací popisek hrany
     * @return
     * @return {string}
     */
    getLabel(): string | null;

    /**
     * Vrací popisek zobrazený v tooltipu
     * @return
     * @return {string}
     */
    getDescription(): string | null;

    /**
     * Vrací barvu hrany
     * @return
     * @return {*}
     */
    getLineColor(): string;

    /**
     * Vrací sílu štětce - jeho tloušťku
     * @return
     * @return {*}
     */
    getStroker(): number;
}



import { IVertex } from './IVertex';


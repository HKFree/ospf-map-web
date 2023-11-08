/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { IEdge } from '../IEdge';
import { IVertex } from '../IVertex';

export abstract class AEdge implements IEdge {
    enabled: boolean;

    hover: boolean;

    vertex1: IVertex | null;

    vertex2: IVertex | null;

    /**
     * 
     * @return {boolean}
     */
    public isHover(): boolean {
        return this.hover;
    }

    public setHover(hover: boolean) {
        this.hover = hover;
    }

    /**
     * 
     * @return {boolean}
     */
    public isEnabled(): boolean {
        return this.enabled;
    }

    /**
     * 
     * @param {boolean} enabled
     */
    public setEnabled(enabled: boolean) {
        this.enabled = enabled;
    }

    public setVertex1(vertex1: IVertex) {
        this.vertex1 = vertex1;
    }

    /**
     * 
     * @return {*}
     */
    public getVertex1(): IVertex | null {
        return this.vertex1;
    }

    public setVertex2(vertex2: IVertex) {
        this.vertex2 = vertex2;
    }

    /**
     * 
     * @return {*}
     */
    public getVertex2(): IVertex | null {
        return this.vertex2;
    }

    /**
     * 
     * @return {string}
     */
    public getLabel(): string | null {
        return null;
    }

    /**
     * 
     * @return {string}
     */
    public getDescription(): string | null {
        if (!this.vertex1?.isVisible() || !this.vertex2?.isVisible()){
            return null;
        }
        return this.getLabel();
    }

    /**
     * 
     * @return {*}
     */
    public getLineColor() : string {
        if (!this.vertex1?.isVisible() || !this.vertex2?.isVisible()){
            return "";
        }
        return "orange";
    }

    /**
     * 
     * @return {*}
     */
    public getStroker(): number {
        if (!this.vertex1?.isVisible() || !this.vertex2?.isVisible()){
            return 0;
        }
        return 1;
    }

    constructor() {
        this.enabled = true;
        this.hover = false;
        this.vertex1 = null;
        this.vertex2 = null;
    }
}





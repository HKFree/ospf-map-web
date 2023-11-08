/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { IVertex } from '../IVertex';

export abstract class AVertex implements IVertex {
    /*private*/ enabled: boolean;

    /*private*/ visible: boolean;

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

    /**
     * 
     * @return {boolean}
     */
    public isVisible(): boolean {
        return this.visible;
    }

    /**
     * 
     * @param {boolean} visible
     */
    public setVisible(visible: boolean) {
        this.visible = visible;
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
        return null;
    }

    /**
     * 
     * @return {Color}
     */
    public getColorFill(): string {
        if (!this.isVisible()){
            return "";
        }
        if (!this.isEnabled()){
            return "white";
        }
        return "black";
    }

    /**
     * 
     * @return {Color}
     */
    public getColorStroke(): string {
        if (!this.isVisible()){
            return "";
        }
        return "darkgray";
    }

    /**
     * 
     * @return {*}
     */
    public getStroker(): number {
        if (!this.isVisible()){
            return 0;
        }
        return this.isEnabled() ? 1 : 0.5; //RenderContext.DASHED;
    }


    constructor() {
        this.enabled = true;
        this.visible = true;
    }
}




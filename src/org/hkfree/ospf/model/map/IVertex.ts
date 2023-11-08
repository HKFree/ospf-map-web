/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
/**
 * Rozhraní pro vrcholu grafu (router nebo zařízení z LLTD modelu)
 * @author Jan Schovánek
 * @class
 */
export interface IVertex {
    isEnabled(): boolean;

    setEnabled(enabled: boolean) : void;

    isVisible(): boolean;

    setVisible(visible: boolean) : void;

    /**
     * Vrací název vrcholu
     * @return
     * @return {string}
     */
    getLabel(): string | null;

    /**
     * Vrací popisek vrcholu
     * @return
     * @return {string}
     */
    getDescription(): string | null;

    /**
     * Vrací barvu výplně vrcholu
     * @return
     * @return {Color}
     */
    getColorFill(): string;

    /**
     * Vrací barvu ohraničení vrcholu
     * @return
     * @return {Color}
     */
    getColorStroke(): string;

    /**
     * Vrací štětec (jeho sílu, může být čárkovaný)
     * @return {*} štětec
     */
    getStroker(): number;

}



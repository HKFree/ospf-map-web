import * as d3 from "d3";
import { useEffect, useRef } from "react";
import {MapModel} from "./org/hkfree/ospf/model/map/MapModel";
import {LinkEdge} from "./org/hkfree/ospf/model/map/impl/LinkEdge";
import {IVertex} from "./org/hkfree/ospf/model/map/IVertex";

interface FDGNode extends d3.SimulationNodeDatum {
    id: string;
    group: number;
}

interface FDGLink extends d3.SimulationLinkDatum<FDGNode> {
    value: number;
}

export function D3Renderer(props: { mapModel: MapModel}) {

    const elRef = useRef(null);

    useEffect(() => {
        // Specify the dimensions of the chart.
        const width = 928;
        const height = 600;

        const graph = d3.select(".d3-container")
            .attr("width", width)
            .attr("height", height);

        const links: FDGLink[] = props.mapModel.getLinkEdges().toArray<LinkEdge>()
            .filter((link: LinkEdge) => link.getVertex1() && link.getVertex2() && link.getVertex1()?.getLabel() && link.getVertex2()?.getLabel()) // TODO - remove this filter
            .map((link: LinkEdge) => {
            return {
                source: link.getVertex1()?.getLabel(),
                target: link.getVertex2()?.getLabel(),
                value: 1,
            }
        });

        const nodes: FDGNode[] = props.mapModel.getVertices().toArray()
            .filter((vertex: IVertex) => vertex.getLabel()) // TODO - remove this filter
            .map((vertex: IVertex) => {
            return {
                id: vertex.getLabel(),
                group: 1,
            }
        });

        console.log('links', links);
        console.log('nodes', nodes);

        // Create the SVG container.
        const svg = d3.select(".d3-container")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto;");

        // Create a simulation with several forces.
        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink<FDGNode, FDGLink>(links).id(d => d.id))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2))
            .on("tick", ticked);

        // Add a line for each link, and a circle for each node.
        const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll()
            .data<FDGLink>(links)
            .join("line")
            //.attr("stroke-width", d => Math.sqrt(d.value));
            .attr("stroke-width", d => 1);

        const node = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll()
            .data<FDGNode>(nodes)
            .join("circle")
            .attr("r", 5)
            //.attr("fill", d => color(d.group));
            .attr("fill", "#f00");

        node.append("title")
            .text(d => d.id);

        function ticked() {
            console.log("ticked");
            link
                .attr("x1", d => (d.source as FDGNode).x!)
                .attr("y1", d => (d.source as FDGNode).y!)
                .attr("x2", d => (d.target as FDGNode).x!)
                .attr("y2", d => (d.target as FDGNode).y!);

            node
                .attr("cx", d => d.x!)
                .attr("cy", d => d.y!);
        }


    });

    return (
        <div>
            <svg className="d3-container" width="200" height="200"></svg>
        </div>
    );
}
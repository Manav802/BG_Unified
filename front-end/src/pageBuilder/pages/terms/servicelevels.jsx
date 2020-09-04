const servicelevels = [
    {
        title: "2.1 Service Levels",
        titleSize: "lg",
        spacing: "16px",
        list: [
            <span>
                BG Unified Solutions must provide the Customer with a Service Level
                Agreement in respect of each Service supplied to the Customer.<br/>
                Primary contact – NOC ( <a href="mailto:noc@bgunifiedsolutions.net" className="text-primary">noc@bgunifiedsolutions.net</a>, 1300 00BGUS).<br/>
                Escalation contact – Saurabh Sareen ( ssareen@bgunifiedsolutions.net ,
                0407 937 544 / 02 9095 0000).
            </span>,
             <span>
                A Service Level Agreement will be binding in respect of guaranteed
                service levels of the Service to which it relates and will continue in force
                for as long as BG Unified Solutions continues to supply the relevant
                Service.
            </span>,
            <span>
                A Service Order will continue in force for the specified Initial Term. After
                expiry of the Initial Term it will continue in force until terminated by either
                party giving 60 days’ written notice to the other.
            </span>,
            <span>
                Termination of a Service Order does not automatically terminate this
                Agreement or any applicable Service Schedule, which will each
                continue in force until terminated in accordance with this Agreement.
            </span>
        ],
        styleType: "upper-alpha",
        as: "ol"
    },
    {
        title: "2.2 Service Orders",
        titleSize: "lg",
        spacing: "16px",
        list: [
            <span>
                BG Unified Solutions must provide the Customer with a Service Order in
                respect of each individual supply of a Service. Once agreed, the
                Service Order will be binding in accordance with its terms in respect of
                the particular supply of the Service to which it relates. Refer to page 30
                for the Service Order details.
            </span>,
            <span>
                A Service Order will continue in force for the specified Initial Term. After
                expiry of the Initial Term it will continue in force until terminated by either
                party giving 60 days’ written notice to the other.
            </span>,
            <span>
                Termination of a Service Order does not automatically terminate this
                Agreement or any applicable Service Schedule, which will each
                continue in force until terminated in accordance with this Agreement.
            </span>
        ],
        styleType: "upper-alpha",
        as: "ol"
    },
    {
        title: "2.3 Interaction between this Agreement, Service Level Agreement and Service Order",
        titleSize: "lg",
        text: <span>In the event of any inconsistency between the terms of this Agreement, a
        Service Level Agreement and a Service Order in relation to a particular supply
        of a Service, the following order of priority applies:</span>
    },
    {
        list: [
            "first the Service Order; then",
            "the Service Level Agreement; and last",
            "this Agreement."
        ],
        spacing: "12px",
        as: "ol",
        ml: 4,
        styleType: "upper-alpha"
    }
]


export default servicelevels.map((block) => {
    block.fontSize = "md"
    return block
})
const definations = [
    {
        title: "Definitions",
        titleSize: "lg",
        text: "In this agreement unless the context otherwise requires:",
    },
    {
        text: <span><b>Agreement</b> means this Master Services Agreement and its schedules and
        annexures, as varied from time to time.</span>
    },
    {
        text: <span><b>Business Day</b> means:</span>
    },
    {
        list: [
            "in relation to a service provided at a data centre, a day that is not a Saturday, Sunday or public holiday in the state in which that data centre is located and in all other cases,",
            "a day that is not a Saturday, Sunday or public holiday in NSW."
        ]
    },{
        text: <span><b>Charges</b> means the fees payable by the Customer to BG Unified Solutions for
        Services provided under this Agreement or any relevant Service Schedules or
        Service Orders, including any Fixed Term Charge.</span>
    },
    {
        text: <span><b>Corporations Act </b>means the Corporations Act 2001 (Cth).</span>
    },
    {
        text: <span><b>Confidential Information </b>of a party means any information marked as
        confidential or which by its nature the other party knows or ought to know is
        confidential (regardless of the form of the information and when it was
        acquired) and includes trade secrets, technical knowledge, concepts, designs,
        plans, precedents, processes, methods, techniques, know-how, innovations,
        ideas, procedures, research data, financial data, databases, personnel data,
        computer software and programs, customer and supplier information,
        correspondence and letters and papers of every description including all copies
        or extracts of same relating to the affairs or business of the party.</span>
    },
    {
        text: <span><b>Control </b>has the meaning given in the Corporations Act.</span>
    },
    {
        text: <span><b>Customer Equipment </b>means any hardware, software, equipment, systems
        and cabling provided by the Customer or an End User used in the provision of
        Services.</span>
    },
    {
        text: <span><b>End User </b>means the customer</span>
    },
    {
        text: <span><b>Fixed Term Service </b>means any Service supplied by BG Unified Solutions in a
        fixed or minimum amount per month for a fixed Initial Term, where the number
        of months in the Initial Term is specified in the relevant Service Order for that
        Service.</span>
    },
    {
        text: <span><b>Fixed Term Charge </b>means means the charge payable in accordance with clause 5.2
        for a Fixed Term Service for the total duration of the Initial Term.</span>
    },
    {
        text: <span><b>Force Majeure Event </b>means means any event that is beyond the reasonable control
        of a party and which prevents a party from performing, or delays the
        performance of, any of its obligations under this Agreement or any Service
        Level Agreement or Service Order including (without limitation):</span>,
    },
    {
        list: [
            "forces of nature, any act of God, fire, storm or explosion;",
            "any strike, lockout or industrial action; and",
            "any action or inaction by any organ of government or government agency."
        ],
        as: "ol",
        styleType: "decimal",
        ml: 3   
    },
    {
        text: <span><b>GST</b> has the same as in A New Tax System (Goods and Services Tax) Act
        1999 (Cth).</span>
    },
    {
        text: <span><b>Initial Term </b>means, in respect of a Service, the minimum contract period
        specified in a Service Order applicable to that Service, the term of which shall
        be deemed to commence on the RFS Date.</span>
    },
    {
        text: <span><b>Insolvency Event </b>means in relation to a party:</span>
    },
    {
        list: [
            <span>
                a receiver, receiver and manager, trustee, administrator, other controller
                (as defined in the Corporations Act or similar official is appointed over
                any of the assets or undertaking of the party;
            </span>,
            <span>
                the party suspends payment of its debts generally;
            </span>,
            <span>
                the party is or becomes unable to pay its debts when they are due or is
                or becomes unable to pay its debts or is presumed to be insolvent within
                the meaning of the Corporations Act;
            </span>,
            <span>
                the party enters into or resolves to enter into any arrangement,
                composition or compromise with, or assignment for the benefit of, its
                creditors or any class of them;
            </span>,
            <span>
                the party ceases to carry on business or threatens to cease to carry on
                business;
            </span>,
            <span>
                a resolution is passed or any steps are taken to appoint, or to pass a
                resolution to appoint, an administrator; or
            </span>,
            <span>
                an application or order is made for the winding up or dissolution of the
                other party, or a resolution is passed, or any steps are taken to pass a
                resolution, for the winding up or dissolution of the other party, otherwise
                than for the purpose of an amalgamation or reconstruction that has the
                prior written consent of the first party;
            </span>,
            <span>
                a party threatens to do any of (a) – (g).
            </span>,
        ],
        as: "ol",
        styleType: "upper-alpha",
        ml: 3   
    },
    {
        text: <span><b>Intellectual Property Rights </b>means all intellectual property rights, including
        the following rights:</span>
    },
    {
        list: [
            <span>
                patents, copyright, rights in circuit layouts, registered and unregistered
                designs, trademarks, domain names, business names and any right to
                have confidential information kept confidential; and
            </span>,
            <span>
                any application or right to apply for registration of any of the rights
                referred to in paragraph (a).
            </span>,
        ],
        as: "ol",
        styleType: "upper-alpha",
        ml: 3   
    }
]

var text = [
    {
        text: <span><b> </b>means </span>
    },
]

export default definations.map((block) => {
    block.fontSize = "md"
    return block
})
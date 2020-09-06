import WirelessPricing from "../../pricing/WirelessPricing";

export default [
    {
        pt: 0,
        mt: "-96px",
        body: [
            {
                type: "pricing",
                data: <WirelessPricing></WirelessPricing>
            }
        ]
    },
    {
        my: 0,
        body: [{
            type: "content",
            data:[{
                text: "Cisco Wi-Fi and Aruba Wi-Fi. The hosted wireless solution includes multiple clusters as well as isolated Data centres of Cisco WLC 5508, 2504 and Aruba controllers.",
                textAlign: "center"
            }]
        }]
    }
]
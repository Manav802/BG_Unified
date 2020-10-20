{timeline.map(notes=>{
              <Box pos="relative">
                <Flex h="300px">
                  <Flex justify="center" align="center" width="160px" height="96px"><Box width="100%" height="4px" bg="gray.200"></Box></Flex>
                  <Flex justify="center" align="center" rounded="50%" borderWidth={5} borderWidthColor="gray.200" size="96px" color="white" bg="primary.500">
                    <Heading size="md" fontFamily="Nexa Bold">{notes.year}</Heading>
                  </Flex>
                  <Flex justify="center" align="center" width="160px" height="96px"><Box width="100%" height="4px" bg="gray.200"></Box></Flex>
                </Flex>
                <Box pos="absolute" top="96px" width="100%" px={6} mt={8}>
                  <Text fontSize="lg" textAlign="center">
                    {notes.text}
                  </Text>
                </Box>
              </Box>
              })}
              const timeline = [
  {year:2013,
  text: "Founded BG Unified Solutions Pty Ltd, a team providing IT solutions to the clients focusing on customer satisfaction and deliverability."},
  {year:2014,text: "F5 Authorized Partners, CISCO Premier Partner, CISCO Advanced Collaboration, Architecture Specialized Partner, Palo Alto Authorized Partners."},
  {year:2015,text: "Nimble Storage Partners, NetAPP Partner, GENESYS Collaboration"},
  {year:2016,text: "Technology migration to Next-Generation Firewalls, UCaaS, Wireless, Telepresence and Storage."},
  {year:2017,text: "Presence in London, offering all the services in our portfolio including, UCaaS, SaaS, IaaS, WiaaS and FaaS"},
  {year:2018,text: "Received BTS Excellence Award in recognition of Excellent Service by the NSW Government."},
  {year:2019,text: "Built our Logging Cloud Connect Product, Newly deployed RDS/VDIaaS Solution into its portfolio as Workstation Service."},
  {year:2020,text: "DNS As A Service using a hybrid Windows, Red Hat Linux and Infoblox DNS Servers"},
  {year:2020,text: "DNS As A Service using a hybrid Windows, Red Hat Linux and Infoblox DNS Servers"},
  {year:2020,text: "DNS As A Service using a hybrid Windows, Red Hat Linux and Infoblox DNS Servers"},
]

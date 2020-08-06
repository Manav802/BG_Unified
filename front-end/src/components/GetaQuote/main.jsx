import React,{Component} from 'react';
import {
FormControl,
FormLabel,Input,Button,Select,
ModalContent,
ModalHeader,
ModalBody,
ModalCloseButton,
} from "@chakra-ui/core";
import keys from '../../apiKeys';
class GetaQuoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      phone:'',
      serviceName:this.props.ServiceName,
      serviceDescription:this.props.ServiceDescription
      }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(event) {
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({
      [name]: value
    })
  }
  onSubmit(event) {
    event.preventDefault()
    fetch(' https://submit-form.com/'+keys.GetaQuote, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
  }
  render() {
    return (      
      <ModalContent>
            <ModalHeader><span className="display5">{this.props.serviceName}</span></ModalHeader>
            <p className="px-4 h6">{this.props.serviceDescription}</p>
            <ModalCloseButton/>
            <form className="getaquote-form" onSubmit={this.onSubmit}>
                <input
                  type="hidden"
                  name="_redirect"
                  value="false"
                />
                <input
                  type="hidden"
                  name="serviceName"
                  value={this.props.serviceName}
                />
                <input
                  type="hidden"
                  name="serviceDescription"
                  value={this.props.serviceDescription}
                />
                <FormControl className="container" isRequired>
                  <FormLabel htmlFor="name">Name:</FormLabel>
                  <Input 
                    variant="flushed"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </FormControl>
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                      <FormControl mt={"14%"} isRequired>
                          <FormLabel htmlFor="email">Email:</FormLabel>
                          <Input
                              variant="flushed"
                              type="email"
                              name="email"
                              value={this.state.email}
                              onChange={this.onChange}
                          />
                      </FormControl>
                    </div>
                      <div className="col-md-6">
                        <FormControl mt={"14%"} isRequired>
                          <FormLabel htmlFor="phone">Contact No.</FormLabel>
                          <Input 
                            type="phone" 
                            variant="flushed" 
                            name="phone"
                            value={this.state.phone}
                            onChange={this.onChange}
                          />
                        </FormControl>
                      </div>
                    </div>
                </div>
                <FormControl mt={"9%"} className="container" isRequired>
                  <FormLabel>Details:</FormLabel>
                  <Input 
                    variant="flushed" 
                    size="lg"   
                    name="message"
                    value={this.state.message}
                    onChange={this.onChange}
                  />
                </FormControl>
                <div className="container">
                    <Button 
                        mt={"15%"} 
                        className="hover-color" 
                        type="submit" 
                        size="md" 
                        height="48px"
                        width="115px" 
                        backgroundColor="#F32222" 
                        color="white"
                    >Submit</Button>
                </div>
              </form>
          </ModalContent>        
             
    )
  }
}
export default GetaQuoteForm;
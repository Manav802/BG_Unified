import React,{Component} from 'react';
import {
FormControl,
FormLabel,Input,Button,Select
} from "@chakra-ui/core";
import keys from '../../apiKeys';
class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      phone:'',
      subject:''
      // ServiceChoice:''
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
    fetch(' https://submit-form.com/'+keys.formscript, {
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
        console.error(error)
      })
  }
  render() {
    return (
      <form className="contact-form" onSubmit={this.onSubmit}>
        <input
          type="hidden"
          name="_redirect"
          value="false"
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
        <FormControl mt={"9%"} className="container">
          <FormLabel>Subject:</FormLabel>
          <Input
            variant="flushed"
            name="subject"
            value={this.state.subject}
            onChange={this.onChange}
          />
        </FormControl>
        {/* <FormControl mt={"9%"} className="container">
          <FormLabel>Service Preference:</FormLabel>
          <Select
            variant="flushed"
            placeholder="Select option"
            name="ServiceChoice"
            value={this.state.ServiceChoice}
            onChange={this.onChange}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl> */}
        <FormControl mt={"9%"} className="container" isRequired>
          <FormLabel>Message:</FormLabel>
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
    )
  }
}
export default ContactForm
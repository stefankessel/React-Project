import React, { Component } from 'react';
import Wrapper from './Wrapper'
import Modal from '../views/Modal/Modal'


const withErrorHandler = (WrappedComponent, axiosInstance) => {
    return class extends Component{
        state= {
            error: null
        }

        constructor(){
            super()
            this.resAxios = axiosInstance.interceptors.response.use(res => res, error => {
                console.log(error)
                this.setState({error:error})
            })
            this.reqAxios = axiosInstance.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
        }

        componentWillUnmount(){
            console.log("Unmount", this.reqAxios.typeof, this.resAxios.typeof)
            axiosInstance.interceptors.response.eject(this.resAxios)
            axiosInstance.interceptors.request.eject(this.reqAxios)
        }

        render(){
            return(
                <Wrapper>
                    <Modal 
                        show={this.state.error} 
                        close={ () => this.setState({error: null})}>
                            {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Wrapper>
            )
        }
    }
}

export default withErrorHandler;
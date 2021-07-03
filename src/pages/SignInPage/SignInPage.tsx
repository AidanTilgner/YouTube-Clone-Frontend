//modules
import React, { useState } from 'react'
import Axios from 'axios'

//files
import './SignInPage.scss'

//components
import { GoogleLogin } from 'react-google-login'

const SignInPage: React.FC = () => {

    let [channelName, setChannelName] = useState<string>('')

    const URL = "http://localhost:8080"
    const endpoint = "/signin"

    const responseGoogle = (res: any) => {
        console.log(res)

        const name = res.profileObj.name
        const email = res.profileObj.email
        const googleId = res.profileObj.googleId
        const imageUrl = res.profileObj.imageUrl

        console.log(name, email, googleId, channelName, imageUrl)

        Axios.post(URL + endpoint, {
            name: name,
            email: email,
            googleId: googleId,
            channelName: channelName,
            imageUrl: imageUrl,
        })
        .then(res => {
            console.log("success!")
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="sign-in-page">
            <div className="sign-in-page__container">
                <div className="sign-in-page__top">
                    <h1 className="sign-in-page__header">
                        Sign In With Google
                    </h1>
                </div>
                <div className="sign-in-page__body">
                    <input 
                        type="text" 
                        className="sign-in-page__channel-input" 
                        placeholder="Channel name"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setChannelName(e.target.value)
                            console.log(e.target.value)
                        }}
                    />
                    <GoogleLogin
                        clientId="504154650628-i6nr7osvmp8roo381ep1jkl6min49lha.apps.googleusercontent.com"
                        buttonText="Sign In"
                        onSuccess={res => responseGoogle(res)}
                        onFailure={res => responseGoogle(res)}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
        </div>
    )
}

export default SignInPage

//modules
import React, { useState } from 'react'
import Axios from 'axios'

//files
import './SignInPage.scss'

//components
import { GoogleLogin } from 'react-google-login'

const SignInPage: React.FC = () => {

    let [channelName, setChannelName] = useState<string>('')
    let [signInOption, setSignInOption] = useState<string>('')

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
            sessionStorage.setItem('loggedIn', 'true')
            sessionStorage.setItem('name', name)
            sessionStorage.setItem('imageUrl', imageUrl)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="sign-in-page">
            <div className="sign-in-page__container">
                {
                    signInOption === "" ? (
                        <div className="sign-in-page__body">
                            <button 
                                className="sign-in-page__button"
                                onClick={() => {
                                    setSignInOption("create")
                                }}
                            >
                                Create Account
                            </button>
                            <button 
                                className="sign-in-page__button"
                                onClick={() => {
                                    setSignInOption("signin")
                                }}
                            >
                                Sign In
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="sign-in-page__top">
                                <h1 className="sign-in-page__header">
                                    {
                                        signInOption === "create" ? "Create Account With Google" :
                                        "Sign In With Google"
                                    }
                                </h1>
                            </div>
                            <div className="sign-in-page__body">
                                {
                                    signInOption === "create" &&

                                    <>
                                        <h3 className="sign-in-page__label">What's your channel's name?</h3>
                                        <input 
                                            type="text" 
                                            className="sign-in-page__channel-input" 
                                            placeholder="Channel name"
                                            name="channel-name"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                setChannelName(e.target.value)
                                                console.log(e.target.value)
                                            }}
                                        />
                                    </>
                                }
                                <GoogleLogin
                                    clientId="504154650628-i6nr7osvmp8roo381ep1jkl6min49lha.apps.googleusercontent.com"
                                    buttonText="Continue With Google"
                                    onSuccess={res => responseGoogle(res)}
                                    onFailure={res => responseGoogle(res)}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default SignInPage

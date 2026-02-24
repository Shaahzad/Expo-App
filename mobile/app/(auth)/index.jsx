import { View, Image, StyleSheet, TextInput, Button, TouchableOpacity, Text } from 'react-native'
import { useState } from 'react'
import { Link } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const handleLogin = () => { }
  return (
    <View style={style.container}>
      <View style={style.topIllustration}>
        <Image
          source={require("../../assets/images/login.jpg")}
          style={style.illustrationImage}
          resizeMode='contain'
        />
      </View>
      <View style={style.Card}>
        <View style={style.form}>
          <TextInput
            placeholder='Enter Email'
            style={style.input}
          />
          <TextInput
            placeholder='Enter Password'
            style={style.input}
          />
          <TouchableOpacity>
            <Text style={style.forgotpass}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btn}>
            <Text style={style.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Link href={'/signup'}>
            <Text style={style.signupText}>Don't have an account SignUp</Text>
            </Link>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  topIllustration: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  illustrationImage: {
    width: 200,
    height: 200,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 20,
    height: 50,
    borderRadius: 16,
    backgroundColor: 'white'
  },
  Card: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 60,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 20,
  },
  form: {
    gap: 20
  },
  btn: {
    backgroundColor: 'blue',
    height: 50,
    borderRadius: 16,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 16,
    fontWeight: '600'
  },
  forgotpass: {
    textAlign: 'right',
    textDecorationLine: 'underline',
    fontWeight: '600'
  },
  signupText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16
  }
})
import { View, Image, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'

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
    borderRadius: 20,
    backgroundColor: 'white'
  },
  Card: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 60,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#aca5a5ff',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  }, 
  form: {
    gap: 20
  }
})
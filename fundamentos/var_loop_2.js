const func = []

for (var i = 0; i < 10; i++) {
  func.push(() => console.log(i))
}

func[2]()
func[8]()

// The result is 10, 10, because the variable 'i' is global and the function
// func[2] and func[8] are closures that refer to the global variable 'i'.
// The variable 'i' is incremented until value 10, and the functions
// func[2] and func[8] are closures that refer to the global variable 'i'.
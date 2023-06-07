const func = []

for (let i = 0; i < 10; i++) {
  func.push(() => console.log(i))
}

func[2]()
func[8]()

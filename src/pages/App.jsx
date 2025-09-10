import Header from "../components/Header"

const App = () => {
  return (
    <>
      <Header/>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-normal">
              Welcome to <span className="text-dark-pink">QUIZ</span>
              <span className="text-dark-pink font-bold">Mania</span>
            </h1>
            <div className="text-start  rounded-lg p-4 w-[600px] mx-auto bg-gray-100">
              <p className="text-muted-foreground text-lg ">
                Please read all the rules about this quiz before you start.
              </p>
              <button className="text-primary hover:underline font-medium  text-dark-pink ">Quiz rules</button>
            </div>
           
            
          </div>

  
        </div>
      </div>
    </>
    
  )
}
export default App
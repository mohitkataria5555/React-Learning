function Hello(){
    let myName = 'Mohit';
    let fullName = () =>{
        return 'Mohit Kataria'
    }
    return  <h1>
        Hello {fullName()} this side.
    </h1>
}

export default Hello;
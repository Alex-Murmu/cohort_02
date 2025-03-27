export default function Dashboard(){
    return <div>
        Dashboard
       <Boldify children={<ChildrenComponent />} />
    </div>
}
function Boldify({children}){
  return <b>
    {children}
  </b>
}

function ChildrenComponent(){
    return <p>Hello i am bold</p>
}
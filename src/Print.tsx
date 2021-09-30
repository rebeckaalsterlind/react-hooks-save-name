import './Print.css';

interface Props {
  name: string
}


function Print(props: Props) {
  const {name} = props;

  return (
    <div className="Print">
      <h2>{name}</h2>
      <hr />
    </div>
  );
  
}

export default Print;

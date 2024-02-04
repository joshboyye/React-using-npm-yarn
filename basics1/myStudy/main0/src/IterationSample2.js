import InterationSample from "./IterationSample2";

const IterationSample=()=>{
    const names =['눈사람','얼음','눈','바람'];
    const nameList=names.map((names,index)=><li key={index}>{names}</li>);
    return <ul>{nameList}</ul>;
};

export default IterationSample;
import React from 'react';
import { DataGrid, GridColumn } from 'rc-easyui';
import './app.css';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      depts: []
    }
  }
   componentDidMount() {
    fetch('http://localhost:3000/dept.json')
    .then(Response => Response.json())
    .then(depts => this.setState({depts:depts}))
  }
  render() {
    return (
      <div>
        <DataGrid data={this.state.depts} style={{height:250}}>
          <GridColumn field="deptno" title="부서번호"></GridColumn>
          <GridColumn field="dname" title="부서명"></GridColumn>
          <GridColumn field="loc" title="지역" align="right"></GridColumn>
        </DataGrid>
      </div>
    );
  }
}
 
export default App;

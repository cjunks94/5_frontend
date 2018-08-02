import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

class TableComponent extends React.Component {
  showAllScores=()=>{
    //debugger
    return this.props.allScores.map(score =>{
      console.log(this.props)
      return(
        <Table.Row>
          <Table.Cell>{score.game_name}</Table.Cell>
          <Table.Cell>{score.user_name}</Table.Cell>
          <Table.Cell>{score.score}</Table.Cell>
        </Table.Row>

      )
    })
  }
  render(){
    return(
  <Table celled className="game-container">
    <Table.Header >
      <Table.Row>
        <Table.HeaderCell>game</Table.HeaderCell>
        <Table.HeaderCell>user</Table.HeaderCell>
        <Table.HeaderCell>score</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {this.showAllScores()}
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>

        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>)}
}

export default TableComponent
{/* <Table.Row>
  <Table.Cell>
    <Label ribbon>First</Label>
  </Table.Cell>
  <Table.Cell>Cell</Table.Cell>
  <Table.Cell>Cell</Table.Cell>
</Table.Row>
<Table.Row>
  <Table.Cell>1</Table.Cell>
  <Table.Cell>2</Table.Cell>
  <Table.Cell>3</Table.Cell>
</Table.Row>
<Table.Row>
  <Table.Cell>1</Table.Cell>
  <Table.Cell>2</Table.Cell>
  <Table.Cell>3</Table.Cell>
</Table.Row> */}

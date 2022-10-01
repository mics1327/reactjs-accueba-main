import React, { Component } from 'react';
import { Text, View, FlatList, SectionList } from "react-native"

<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>


const sections = [
  {
    title: "Table",
    key: "Table",
    data: [
     {
       list: [
          {
            name: "Transactions",

          },
          {
            name: "Date",
          },
        ],
      },
    ],
  },
  {
    data: [
      {
        list: [
          {
            name: "3 tons crack cocaine",
          },
          {
            name: "December 25, 2022",
          },
        ],
      },
    ],
  },
]

class Transaction extends Component {
  renderSection = ({ item }) => {
    return (
      <FlatList
        style ={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}
        data={item.list}
        numColumns={10}
        renderItem={this.renderListItem}
        keyExtractor={this.keyExtractor}
      />
    )
  }

  renderSectionHeader = ({ section }) => {
    return <Text>{section.title}</Text>
  }

  renderListItem = ({ item }) => {
      return (
        <View style={{height: 50, width: 100, borderColor: "black", borderWidth: 1 }}>
          <Text>{item.name}</Text>
        </View>
      )
    }

  keyExtractor = (item) => {
    return item.name
  }

  render () {
    return (
      <SectionList
        sections={sections}
        renderSectionHeader={this.renderSectionHeader}
        renderItem={this.renderSection}
      />
    )

  }
}

export default Transaction;
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import React from 'react';
import {Subheading, Paragraph} from 'react-native-paper';

const TableCard = props => {
  return (
    <View style={styles.listitem}>
      <View style={styles.sl}>
        <Text style={styles.slno}>{props.sl}</Text>
      </View>
      <View style={styles.poilcyContent}>
        {props.datas.map((data, i) => (
          <Paragraph
            key={i}
            style={
              data.title == 'Title'
                ? styles.policyTitle
                : data.title == 'Description'
                ? styles.description
                : styles.addedBy
            }>
            <Subheading style={{fontWeight: '500', fontWeight: 'bold'}}>
              {data.title} :{' '}
            </Subheading>
            {data.value}
          </Paragraph>
        ))}
      </View>
    </View>
  );
};

export default TableCard;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  search: {
    paddingLeft: 17,
    paddingRight: 17,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#F2F2F2',
  },
  eventList: {
    marginTop: 20,
  },
  listitem: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
  sl: {
    flexDirection: 'column',
  },
  slno: {
    fontSize: 50,
    color: '#0099FF',
    fontWeight: '600',
  },
  eventMonth: {
    fontSize: 16,
    color: '#0099FF',
    fontWeight: '600',
  },
  poilcyContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
  },
  description: {
    fontSize: 15,
    color: '#646464',
  },
  policyTitle: {
    fontSize: 18,
    color: '#151515',
  },
  addedBy: {
    fontSize: 16,
    color: '#151515',
  },
});

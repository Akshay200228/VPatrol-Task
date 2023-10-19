import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: 'lightgreen',
    borderColor: 'green',
    borderStyle: 'dashed',
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },

  viewListButton: {
    backgroundColor: '#50C878',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
  },
  addbuttonText: {
    color: 'green',
    fontWeight: 'bold',
  },
  finalbuttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginBottom: 16,
  },
  centeredContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: 'green',
    marginLeft: 8,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  itemNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  editButton: {
    backgroundColor: '#ADD8E6',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: '#FFCCCB',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
  },
});

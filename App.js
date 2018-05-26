import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.166512, 
          longitude: 114.974070
        },
        title: 'Brahma Vihara Arama',
        subtitle: 'Gang Sahadewa, Banjar Tegeha, Banjar, Kabupaten Buleleng, Bali'
      },
      {
        key:2,
        latlng: {
          latitude:-8.290195, 
          longitude:  115.023509 
        },
        title: 'Vihara Dharma Giri',
        subtitle: 'Jl. Raya Pupuan No.1, Pupuan, Kabupaten Tabanan, Bali'
      },
      {
        key:3,
        latlng: {
          latitude:-8.5627374,
          longitude: 115.1168925
        },
        title: 'Vihara Dharma Cattra',
        subtitle: 'Jl. Melati No.18, Delod Peken, Kec. Tabanan, Kabupaten Tabanan, Bali'
      }
      ,
      {
        key:4,
        latlng: {
          latitude: -8.4539135,
          longitude: 115.0715739
        },
        title: 'Amurva Bhumi Vihara',
        subtitle: 'Jl. Darma Giri, Blahbatu, Blahbatuh, Gianyar, Kabupaten Gianyar, Bali'
      },
       {
        key:5,
        latlng: {
          latitude:-8.6630452,
          longitude:  115.165301
        },
        title: 'Vihara Asoka Arama',
        subtitle: 'Jalan Nuansa Indah Selatan 1 Kompleks Perum Citra Nuansa Indah, Buluh Indah, Pemecutan Kaja, Denpasar Utara, Pemecutan Kaja, Denpasar, Kota Denpasar, Bali'
      },
      {
        key:6,
        latlng: {
          latitude:-8.6630452,
          longitude: 115.165301
        },
        title: 'Vihãra Dharma Brakta',
        subtitle: ' Jl. Setiaki II No.10, Dangin Puri Kauh, Denpasar Utara, Kota Denpasar, Bali '
      },
      {
        key:7,
        latlng: {
          latitude:-8.6630452,
          longitude:  115.165301
        },
        title: 'Vihara Buddha Dharma',
        subtitle: 'Jl. Eka Laweya, Legian, Kuta, Kabupaten Badung, Bali'
      }, 
      {
        key:8,
        latlng: {
          latitude:-8.4473491,
          longitude:115.5601099
        },
        title: 'Vihara Buddha Ratana',
        subtitle: 'Jl. Bhayangkara, Karangasem, Kec. Karangasem, Kabupaten Karangasem, Bali'
      }, 
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              MAPS VIHARA DI BALI
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> @budiartawan </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#304FFE',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#304FFE',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
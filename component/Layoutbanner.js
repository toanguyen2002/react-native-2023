import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Image } from 'react-native'
import { Dimensions } from 'react-native'
import { ScrollView } from 'react-native'
import { FlatList } from 'react-native'

const Layoutbanner = () => {
    // lưu đối tưởng flatList
    const ref = useRef()
    const [activeIndex, setActiveIndex] = useState(0);
    const images =
        [
            {
                id: 1,
                url: 'https://inanaz.com.vn/wp-content/uploads/2020/02/mau-banner-quang-cao-dep-1.jpg'
            }, {
                id: 2,
                url: 'https://lambanner.com/wp-content/uploads/2022/10/MNT-DESIGN-BANNER-DEP-DOWNLOAD-MIEN-PHI-update.jpg'
            }, {
                id: 3,
                url: 'https://minhduongads.com/wp-content/uploads/2020/01/mau-thiet-ke-banner-dongy-dep-minhduongmedia.jpg'
            }
        ]
    useEffect(() => {
        let interval = setInterval(() => {
            // console.log(ref.current)

            if (Math.round(activeIndex) === images.length - 1) {
                ref.current.scrollToIndex({
                    index: 0,
                    animation: true
                });
                // console.log(activeIndex);
                // console.log(images.length - 1);

            } else {
                ref.current.scrollToIndex({
                    index: Math.round(activeIndex) + 1,
                    animation: true
                });
                // console.log(Math.round(activeIndex));
                // console.log(images.length - 1);
            }
        }, 2000)

        return () => clearInterval(interval)
    })
    // const getItemlayout = (index) => ({
    //     length: Dimensions.get('window').width,
    //     offset: Dimensions.get('window').width * index,
    //     index: index
    // })
    const handleScroll = (event) => {
        // Get the scroll position
        const scrollPosition = event.nativeEvent.contentOffset.x;
        // console.log(event.nativeEvent.contentOffset.y);
        // Get the index 
        const index = scrollPosition / Dimensions.get('window').width;
        // console.log(scrollPosition);
        // console.log({ index });
        // Update the index
        setActiveIndex(Math.round(index));
        // console.log('index: ');
    };

    const renderItem = ({ item, index }) => {
        return (
            <View key={index}>
                <Image style={{ width: Dimensions.get('window').width, height: 300, resizeMode: 'contain' }}
                    key={index} source={{ uri: item.url }} />
            </View>
        )
    }


    const getIndexItem = (event) => {
        const scroll = event.nativeEvent.contentOffset.x

        const index = scroll /

            setActiveIndex(index)
    }
    return (
        <View>
            <FlatList
                data={images}
                ref={ref}
                renderItem={renderItem}
                // getItemLayout={getItemlayout}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                pagingEnabled={true}
                onScroll={handleScroll}
                keyExtractor={item => item.id.toString()}
            />
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    {images.map((item, index) => (
                        index === activeIndex ? <View style={{ width: 10, height: 10, backgroundColor: 'red', borderRadius: 100, marginHorizontal: 10 }}></View>
                            : <View style={{ width: 10, height: 10, backgroundColor: 'green', borderRadius: 100, marginHorizontal: 10 }}></View>
                    ))}
                </View>
            </View>
        </View>

    )
}

export default Layoutbanner

const styles = StyleSheet.create({})
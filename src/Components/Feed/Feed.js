import React from 'react';
import { FlatList } from 'react-native';
import Post from '../Post/Post';
import Stories from '../Stories/Stories';

const data = [
    {
        user: {
            imageUri: 'https://i.pinimg.com/474x/64/76/eb/6476eb89e87258727f13ff41f348939e.jpg',
            name: 'user'
        },
        imageUri: 'https://i.insider.com/60ddb0c6cad1220011caf6d1?width=700',
        caption: '#Winnings',
        likesCount: 100,
        postedAt: '6 minutes ago'
    },
    {
        user: {
            imageUri: 'https://www.discoverwalks.com/blog/wp-content/uploads/2020/10/512px-gandhi_smiling_r.jpg',
            name: 'user'
        },
        imageUri: 'http://listaka.com/wp-content/uploads/2015/07/Die-Hard-Cricket-and-Bollywood-Fans.jpg',
        caption: '#Cricket',
        likesCount: 10,
        postedAt: '1 hour ago'
    },
    {
        user: {
            imageUri: 'http://www.vanitynoapologies.com/wp-content/uploads/2015/09/most-beautiful-women-in-india-7.jpg',
            name: 'user'
        },
        imageUri: 'https://st.depositphotos.com/1010710/3400/i/950/depositphotos_34008725-stock-photo-indian-businessman-working-at-office.jpg',
        caption: '#Winnings',
        likesCount: 1002,
        postedAt: '6 minutes ago'
    },
    {
        user: {
            imageUri: 'https://i.pinimg.com/originals/72/96/32/729632c5cb4f7540db272d5873f0bf0e.jpg',
            name: 'user'
        },
        imageUri: 'https://wirally.com/wp-content/uploads/2019/12/mahesh-babu.jpeg',
        caption: '#Winnings',
        likesCount: 100,
        postedAt: '6 minutes ago'
    },
]

const Feed = () => {
    return <FlatList 
        data={data}
        renderItem={({item}) => <Post post={item}/>}
        ListHeaderComponent={Stories}
    />
}

export default Feed;

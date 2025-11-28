import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ForumPost {
  id: string;
  author: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  timeAgo: string;
  category: string;
}

const ForumScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Placeholder forum posts - will be replaced with actual data from backend
  const forumPosts: ForumPost[] = [
    {
      id: '1',
      author: 'Sarah M.',
      title: 'Best speakers for outdoor events?',
      content:
        'Looking for recommendations on portable speakers that work well for outdoor parties. Any suggestions?',
      likes: 24,
      comments: 8,
      timeAgo: '2 hours ago',
      category: 'Electronics',
    },
    {
      id: '2',
      author: 'Mike T.',
      title: 'Guitar rental experience',
      content:
        'Just rented a Fender Stratocaster last week. Amazing condition and the owner was super helpful!',
      likes: 15,
      comments: 5,
      timeAgo: '5 hours ago',
      category: 'Musical Instruments',
    },
    {
      id: '3',
      author: 'Emma L.',
      title: 'Designer dress rental tips',
      content:
        'First time renting designer clothes. What should I look for when inspecting the item?',
      likes: 32,
      comments: 12,
      timeAgo: '1 day ago',
      category: 'Designer Clothes',
    },
    {
      id: '4',
      author: 'David K.',
      title: 'Camping gear recommendations',
      content:
        'Planning a hiking trip. Need tent and gear recommendations for 3-day trip.',
      likes: 18,
      comments: 6,
      timeAgo: '2 days ago',
      category: 'Outdoor Gear',
    },
  ];

  const categories = [
    'All',
    'Electronics',
    'Musical Instruments',
    'Outdoor Gear',
    'Designer Clothes',
    'General',
  ];

  const renderPost = ({item}: {item: ForumPost}) => (
    <TouchableOpacity style={styles.postCard} activeOpacity={0.7}>
      <View style={styles.postHeader}>
        <View style={styles.authorInfo}>
          <View style={styles.authorAvatar}>
            <Icon name="person" size={20} color="#999" />
          </View>
          <View>
            <Text style={styles.authorName}>{item.author}</Text>
            <Text style={styles.timeAgo}>{item.timeAgo}</Text>
          </View>
        </View>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
      </View>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent} numberOfLines={3}>
        {item.content}
      </Text>
      <View style={styles.postFooter}>
        <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
          <Icon name="thumb-up" size={18} color="#666" />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
          <Icon name="comment" size={18} color="#666" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
          <Icon name="share" size={18} color="#666" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Community Forum</Text>
        <Text style={styles.headerSubtitle}>
          Connect with lenders and renters
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search discussions..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryChip,
              index === 0 && styles.categoryChipActive,
            ]}
            activeOpacity={0.7}>
            <Text
              style={[
                styles.categoryChipText,
                index === 0 && styles.categoryChipTextActive,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.newPostButton} activeOpacity={0.7}>
        <Icon name="add-circle" size={24} color="#FFFFFF" />
        <Text style={styles.newPostText}>New Post</Text>
      </TouchableOpacity>

      <FlatList
        data={forumPosts}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.postsList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 12,
  },
  categoriesContainer: {
    maxHeight: 50,
    marginBottom: 16,
  },
  categoriesContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  categoryChipActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  categoryChipText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  categoryChipTextActive: {
    color: '#FFFFFF',
  },
  newPostButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 14,
    borderRadius: 12,
    gap: 8,
  },
  newPostText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  postsList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  postCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  authorAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  authorName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  timeAgo: {
    fontSize: 12,
    color: '#999',
  },
  categoryBadge: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 11,
    color: '#666',
    fontWeight: '500',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  postContent: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  postFooter: {
    flexDirection: 'row',
    gap: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    fontSize: 14,
    color: '#666',
  },
});

export default ForumScreen;


import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotificationsScreen() {
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);

  const notifications = [
    {
      id: '1',
      title: 'Service Completed Successfully!',
      message:
        'ABC Beauty Parlour says that the facial service was successfully completed. Do you agree with this?',
    },
  ];

  const handleNotificationPress = () => {
    setShowCompletionPopup(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.notificationCard}
            onPress={handleNotificationPress}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.link}>Approve Completion </Text>
          </TouchableOpacity>
        )}
      />

      {/* First Popup */}
      <Modal visible={showCompletionPopup} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.popup}>
            <Text style={styles.popupTitle}>
              Service Completed Successfully!
            </Text>
            <Text style={styles.popupMessage}>
              ABC Beauty Parlour says that the facial service was successfully
              completed. Do you agree with this?
            </Text>
            <TouchableOpacity
              style={styles.buttonOutline}
              onPress={() => setShowCompletionPopup(false)}
            >
              <Text>Not Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setShowCompletionPopup(false);
                setShowFeedbackPopup(true);
              }}
            >
              <Text style={{ color: '#fff' }}>Approve Completion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Second Popup */}
      <Modal visible={showFeedbackPopup} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.popup}>
            <Text style={styles.popupTitle}>Happy with the Service?</Text>
            <Text style={styles.popupMessage}>
              Are you happy with the service you received from here? Let us know
              your opinion. And rate the expert.
            </Text>
            {/* Stars */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 10,
              }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Text key={i} style={{ fontSize: 28, marginHorizontal: 2 }}>
                  ⭐
                </Text>
              ))}
            </View>
            {/* Feedback Box */}
            <View style={styles.feedbackBox}>
              <Text style={{ color: '#aaa' }}>Write Feedback Here</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
              }}
            >
              <TouchableOpacity
                style={styles.buttonOutline}
                onPress={() => setShowFeedbackPopup(false)}
              >
                <Text>Not Now</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setShowFeedbackPopup(false)}
              >
                <Text style={{ color: '#fff' }}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 20, fontWeight: '600', marginBottom: 10 },
  notificationCard: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginBottom: 10,
  },
  title: { fontWeight: '700', fontSize: 16, marginBottom: 4 },
  message: { fontSize: 14, color: '#555' },
  link: { marginTop: 8, color: '#007bff', fontWeight: '500' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },
  popupTitle: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  popupMessage: { textAlign: 'center', marginBottom: 16, color: '#444' },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  feedbackBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    minHeight: 60,
    marginTop: 10,
  },
});

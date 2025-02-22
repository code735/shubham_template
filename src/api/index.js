import { getDatabase, set, ref, push } from 'firebase/database'
import app from '../Firebase';

// PUT calls

// PUT calls
export const updateAssessmentStatus = async ({ assessmentId, deploymentId, status }) => {
  try {
    if (!assessmentId || !deploymentId || !status) {
      throw new Error('Something is missing!');
    }
    const apiUrl = `${process.env.REACT_APP_API_URI}/v5/organisations/tl/deployments/${deploymentId}/assessment/${assessmentId}`;

    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({ status: status })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    return result
  }
  catch (error) {
    console.error('Failed to fetch organisation details:', error.message);
  }
};


// firebase

// types = self_complete, 360_complete, all_complete, asmt_reminder, client_added
// action = go_to_results, go_to_clients, send_reminder
export const sendNotifications = async ({action,action_link,msg,user_name,type}) => {
  const db = getDatabase(app)
  const dbRef = ref(db, `notifications/${process.env.REACT_APP_CLIENT_ID}`)

  const notificationsRef = push(dbRef)

  await set(notificationsRef, {
    action: action,
    action_link: action_link,
    message: msg,
    user_name: user_name,
    notification_type:type,
    reference_id: process.env.REACT_APP_CLIENT_ID,
    timestamp: new Date().toISOString()
  });

  console.log("notificaion sent")
}
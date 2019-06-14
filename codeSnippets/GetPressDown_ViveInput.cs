using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using HTC.UnityPlugin.Vive;
using HTC.UnityPlugin.PoseTracker;
using HTC.UnityPlugin.Utility;

public class GetPressDown_ViveInput : MonoBehaviour
{
    Collider m_Collider;
    Vector3 m_Center;

    Collider n_Collider;
    Vector3 n_Center;

    GameObject emptyGO;

    bool currentlyColliding = false;
    Vector3 pos = new Vector3(0f, 0f, 0f);
    Vector3 rot = new Vector3(0f, 0f, 0f);
    Vector3 startingPos = new Vector3(0f, 0f, 0f);
    Vector3 startingRot = new Vector3(0f, 0f, 0f);
    Vector3 currentPos = new Vector3(0f, 0f, 0f);
    Vector3 currentRot = new Vector3(0f, 0f, 0f);
    int i = 0;

    // Use this for initialization
    void Start()
    {
        //Fetch the Collider from the GameObject
        m_Collider = GetComponent<Collider>();
        //Fetch the center of the Collider volume
        m_Center = m_Collider.bounds.center;

        gameObject.transform.position = new Vector3(m_Center.x * -1, m_Center.y * -1,  m_Center.z * -1);
        emptyGO = new GameObject("empty1");
        Instantiate(emptyGO, new Vector3(0, 0, 0), Quaternion.identity);
        Debug.Log(m_Center);

        gameObject.transform.parent = emptyGO.transform;
        emptyGO.transform.position = m_Center;
    }

    void Update()
    {
        UnityEngine.Pose rightHandPose = VivePose.GetPose(HandRole.RightHand);
        pos = (rightHandPose.position);
        rot = new Vector3(rightHandPose.rotation.eulerAngles.x, rightHandPose.rotation.eulerAngles.y, rightHandPose.rotation.eulerAngles.z);


        if (ViveInput.GetPressDown(HandRole.RightHand, ControllerButton.Trigger))
        {
            if (currentlyColliding == true)
            {
                startingPos = pos;
                startingRot = rot;
                i = 0;
                currentPos = emptyGO.transform.position;
                currentRot = emptyGO.transform.rotation.eulerAngles;

                n_Center = m_Collider.bounds.center;
            }
        }
        if (ViveInput.GetPress(HandRole.RightHand, ControllerButton.Trigger))
        {
            if (currentlyColliding == true)
            {
                Vector3 newPos = new Vector3((pos.x - startingPos.x) + currentPos.x, n_Center.y, (pos.z - startingPos.z) + currentPos.z);
                Vector3 newPos2 = new Vector3((pos.x - startingPos.x) + n_Center.x, n_Center.y, (pos.z - startingPos.z) + n_Center.z);
                emptyGO.transform.position = newPos;

                emptyGO.transform.rotation = Quaternion.identity;
                emptyGO.transform.RotateAround(newPos2, new Vector3(0, 1, 0), rightHandPose.rotation.eulerAngles.y - startingRot.y + currentRot.y);
            }
        }
        if (ViveInput.GetPressUp(HandRole.RightHand, ControllerButton.Trigger))
        {
            currentlyColliding = false;
        }       
    }

    void OnTriggerEnter(Collider collision)
    {
        currentlyColliding = true;
    }

    void OnTriggerStay(Collider collision)
    {
        i++;
    }
}


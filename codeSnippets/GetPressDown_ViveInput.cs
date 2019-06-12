using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using HTC.UnityPlugin.Vive;
using HTC.UnityPlugin.PoseTracker;
using HTC.UnityPlugin.Utility;

public class GetPressDown_ViveInput : MonoBehaviour
{
    bool currentlyColliding = false;
    Vector3 pos = new Vector3(0f, 0f, 0f);
    Vector3 rot = new Vector3(0f, 0f, 0f);
    Vector3 startingPos = new Vector3(0f, 0f, 0f);
    Vector3 startingRot = new Vector3(0f, 0f, 0f);
    int i = 0;

    private void Update()
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
            }            
        }
        if (ViveInput.GetPress(HandRole.RightHand, ControllerButton.Trigger))
        {
            if (currentlyColliding == true && i > 10)
            {
                gameObject.transform.position = new Vector3((pos.x - startingPos.x), 0, (pos.z - startingPos.z));
                transform.eulerAngles= new Vector3(transform.eulerAngles.x, rightHandPose.rotation.eulerAngles.y - startingRot.y, transform.eulerAngles.z);
            }
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

    void OnTriggerExit(Collider collision)
    {
        currentlyColliding = false;
    }
}

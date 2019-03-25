using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace BayatGames.SaveGameFree.Examples
{

    public class ExampleSaveCustom : MonoBehaviour
    {

        [System.Serializable]
        public class CustomData
        {
            public string score;

            public CustomData()
            {
                score = "0";
            }
        }

        public int myScore;
        public string longString;
        public CustomData customData;
        public bool loadOnStart = true;
        public InputField scoreInputField;
        public InputField highScoreInputField;
        public string identifier = "exampleSaveCustom";

        void Start()
        {
            if (loadOnStart)
            {
                Load();
            }
        }

        private void Update()
        {

            if (myScore != MyCounter.mCount)
            {
                myScore = MyCounter.mCount;
                longString = longString + ", " + myScore.ToString();
                Debug.Log(longString);
                customData.score = longString;
            }
            
        }
    

        
        public void Save()
        {
            SaveGame.Save<CustomData>(identifier, customData, SerializerDropdown.Singleton.ActiveSerializer);
        }

        public void Load()
        {
            customData = SaveGame.Load<CustomData>(
                identifier,
                new CustomData(),
                SerializerDropdown.Singleton.ActiveSerializer);
                longString = customData.score.ToString();
            
        }

    }

}

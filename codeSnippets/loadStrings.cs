using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;
using System.Text.RegularExpressions;

public class loadStrings : MonoBehaviour
{
    public float wid = 0.01f;

    void Start()
    {

        string path1 = "Assets/Resources/test2.txt";

        //Read the text from directly from the test.txt file
        FileStream fs1 = new FileStream(path1, FileMode.Open);
        string content1 = "";
        using (StreamReader read = new StreamReader(fs1, true))
        {
            content1 = read.ReadToEnd();
        };

        string[] result1 = Regex.Split(content1, "\r\n?|\n", RegexOptions.Singleline);

        Vector3[] vectors1 = new Vector3[result1.Length];


        fs1.Close();

        for (var i = 0; i < result1.Length; i++)
        {
            var pt = result1[i].Split(","[0]); // gets 3 parts of the vector into separate strings
            var x = float.Parse(pt[0]);
            var y = float.Parse(pt[1]);
            var z = float.Parse(pt[2]);
            vectors1[i] = new Vector3(x, y, z);
        }

        string path2 = "Assets/Resources/test1.txt";

        //Read the text from directly from the test.txt file
        FileStream fs2 = new FileStream(path2, FileMode.Open);
        string content2 = "";
        using (StreamReader read = new StreamReader(fs2, true))
        {
            content2 = read.ReadToEnd();
        };

        string[] result2 = Regex.Split(content2, "\r\n?|\n", RegexOptions.Singleline);

        Vector3[] vectors2 = new Vector3[result2.Length];

        fs1.Close();

        for (var i = 0; i < result2.Length; i++)
        {
            var pt = result2[i].Split(","[0]); // gets 3 parts of the vector into separate strings
            var x = float.Parse(pt[0]);
            var y = float.Parse(pt[1]);
            var z = float.Parse(pt[2]);
            vectors2[i] = new Vector3(x, y, z);
        }

        Debug.Log(vectors1[0]);

        for (var i = 0; i < result1.Length; i++)
        {
            GameObject go = Instantiate(new GameObject("name"), transform.position, Quaternion.identity, gameObject.transform);
            LineRenderer lineRenderer = go.AddComponent<LineRenderer>();
            lineRenderer.material = new Material(Shader.Find("Sprites/Default"));
            lineRenderer.startWidth = wid;
            lineRenderer.endWidth = wid;

            //Vector3 sp = new Vector3(0, 0, 0);
            //Vector3 ep = new Vector3(1, 0, 0);
            lineRenderer.positionCount = 2;
            lineRenderer.SetPosition(0, vectors2[i]);
            lineRenderer.SetPosition(1, vectors1[i]);
            lineRenderer.startColor = Color.black;
            lineRenderer.endColor = Color.black;
            //Destroy(go);
        }


    }

    // Update is called once per frame
    void Update()
    {

    }
}

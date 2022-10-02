
public class LUPrefix {

    boolean[] uploadedVideos;
    int longestUploadedPrefix = 0;

    public LUPrefix(int inputSize) {
        uploadedVideos = new boolean[inputSize];
    }

    public void upload(int video) {
        uploadedVideos[video - 1] = true;
        while (longestUploadedPrefix < uploadedVideos.length && uploadedVideos[longestUploadedPrefix]) {
            ++longestUploadedPrefix;
        }
    }

    public int longest() {
        return longestUploadedPrefix;
    }
}


#include <vector>
using namespace std;

class LUPrefix {
    
    vector<bool> uploadedVideos;
    int longestUploadedPrefix = 0;

public:
    explicit LUPrefix(int inputSize) {
        uploadedVideos.resize(inputSize);
    }

    void upload(int video) {
        uploadedVideos[video - 1] = true;
        while (longestUploadedPrefix < uploadedVideos.size() && uploadedVideos[longestUploadedPrefix]) {
            ++longestUploadedPrefix;
        }
    }

    int longest() const {
        return longestUploadedPrefix;
    }
};

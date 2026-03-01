import Map "mo:core/Map";
import Array "mo:core/Array";

actor {
  // Type for pilot request
  type PilotRequest = {
    name : Text;
    company : Text;
    email : Text;
    message : Text;
  };

  let pilotRequests = Map.empty<Text, PilotRequest>();
  var downloadCount = 0;

  // Submit a new pilot request
  public shared ({ caller }) func submitPilotRequest(name : Text, company : Text, email : Text, message : Text) : async () {
    let request : PilotRequest = { name; company; email; message };
    pilotRequests.add(email, request);
  };

  // Increment download count
  public shared ({ caller }) func incrementDownloadCount() : async () {
    downloadCount += 1;
  };

  // Get all pilot requests
  public query ({ caller }) func getAllPilotRequests() : async [PilotRequest] {
    pilotRequests.values().toArray();
  };

  // Get total download count
  public query ({ caller }) func getDownloadCount() : async Nat {
    downloadCount;
  };
};

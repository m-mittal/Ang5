export class linkItemClass{
  id: number;
  voteCount: number;
  Title: String;
  Link: String;

  voteUp(obj:linkItemClass){
    this.voteCount = this.voteCount + 1;
  }

  voteDown(obj:linkItemClass){
    this.voteCount = this.voteCount - 1;
  }
}

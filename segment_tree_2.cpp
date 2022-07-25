//segment tree;
#include <bits/stdc++.h>

using namespace std;


template<class T>
class Nop{
  
  constexpr T operator()( const T& lhs, const T& rhs ) const {
    return lhs;
  }
};

//QueryOp(a,b) e.g. a+b
//ModOp(a,b) e.g. a+b
//MultOp(b,n) e.g. b*n //How the ModOp stacks for n leaves
//Identity of ModOp, e.g. 1 for multiplication
template<class T, typename QueryOp, typename ModOp, typename MultOp, T identity>
class segtree{
public:

  segtree(int size) : N(size){
    int s = 1;
    while (s < size) s<<=1;
    data = (pair<T, T>*)calloc(N*2, sizeof(pair<T,T>));
    for (int i = 0; i < 2*N; i++){
      data[i].second = identity;
    }
    build(N, 2*N);
  }

  segtree(vector<T> init) : segtree(init.size()){
    for (int i = N; i < 2*N; i++){
      data[i].first = init[i - N];
    }
    build(N, 2*N);
  }
  
  ~segtree(){
    free(data);
  }

  T query(int s, int e){
    return query(s, e, 0, N, 1);
  }
  
  T query(int s, int e, int _s, int _e, int _i){
    if (s <= _s && e >= _e) return query(_i, _s, _e);
    propagateDown(_i, _s, _e);
    int m = (_s+_e)/2;
    if (s >= m) return query(s, e, m, _e, _i*2+1);
    if (e <= m) return query(s, e, _s, m, _i*2);
    return QueryOp()(query(s, e, _s, m, _i*2), query(s, e, m, _e, _i*2+1));
  }

  void update(int s, int e, int x){
    update(s,e,x,0,N,1);
  }

  void update(int s, int e, int x, int _s, int _e, int _i){
    cerr <<s << ", " << e << ", " << x << " updating " << _i << " (" << _s << ", " << _e << ")" << endl;
    
    int m = (_s+_e)/2;
    if (s <= _s && e >= _e) {
      data[_i].second = ModOp()(data[_i].second, x);
      cerr << "updating " << _i << ": " << data[_i].second << endl;
    }
    else {
      propagateDown(_i, _s, _e);
      if (s >= m) {
	update(s, e, x, m, _e, _i*2+1);
     
      }
      else if (e <= m) {
	update(s, e, x, _s, m, _i*2);
     
      }
      else{
	update(s, e, x, m, _e, _i*2+1);
	update(s, e, x, _s, m, _i*2);
      
      }
      propagateUp(_i, _s, _e);
    }
  }

  void print(){
    for (int i = 1; i < 2*N; i++){
      cerr << data[i].first << "|" << data[i].second << " ";
    }
    cerr << endl;
  }

private:
  pair<T, T>* data;
  const int N;

  T query(int i, int s, int e){
    return ModOp()(data[i].first, MultOp()(data[i].second, e - s));
  }
  
  void propagateDown(int i, int s, int e){
    if (data[i].second != identity){
      data[i*2].second = ModOp()(data[i*2].second,data[i].second);
      data[i*2+1].second = ModOp()(data[i*2+1].second,data[i].second);
      data[i].second = identity;
      propagateUp(i, s, e);
    }
  }

  void propagateUp(int i, int s, int e){
    data[i] = {QueryOp()(query(i*2, s, (s+e)/2), query(i*2+1, (s+e)/2, e)), identity};
  }
  
  void build(int s, int e){
    if (e <= N){
      for (int i = s; i < e; i++){
	data[i] = {QueryOp()(data[i*2].first, data[i*2+1].first), identity};
      }
    }
    if (s > 0){
      build(s/2, (e+1)/2);
    }
  }  
};


int main(){
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  int N;
  //cin >> N;
  segtree<int, plus<int>, plus<int>, multiplies<int>, 0> tree(4);
  tree.print();
  tree.update(0, 3, 1);
  tree.print();
  tree.update(0, 4, 1);
  tree.print();
  cout << tree.query(2, 4) << endl;
  tree.print();
  cout << tree.query(0, 4) << endl;
  tree.print();
  cout << tree.query(1, 2) << endl;
  tree.print();
  tree.update(0, 1, 2);
  tree.print();
  cout << tree.query(3, 4) << endl;
  tree.print();

}
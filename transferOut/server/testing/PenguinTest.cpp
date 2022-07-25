#include <gtest/gtest.h>

#include <algorithm>
#include <numeric>
#include <stack>

#include "../threader/Penguin.hpp"
#include "../threader/multi_threader.hpp"
struct PenguinTest : public ::testing::Test {
  virtual void SetUp() override {

  // Buffer<int, 1000, 10> base;
  // Buffer<int, 1000, 45> base;
  }

  virtual void TearDown() override {}
};


class MyStackTest : public ::testing::Test{
  virtual void SetUp(){


    

  };


  virtual void TearDown(){



  }


};


TEST_F(PenguinTest, CheckSpeak) {
  Penguin p;
  EXPECT_EQ(p.speak(), "Hello Word");
};

TEST_F(MyStackTest, Over_Compactly_Check) {
  int change = 0;
  int change2 = 0;
  Buffer<int, 1000, 10> base;
  for (int i = 1; i < 20; i++) base.add(i);

  EXPECT_EQ(base.size, 10);
};




TEST_F(MyStackTest, Replacement_Factor) {
bool break_it = true;
constexpr int width = 45;
constexpr int range = 1000;


Buffer<int, range, width> base;
bool arr[100];
bool *ar = arr;

  std::vector<int> numbers(width);
  std::iota(numbers.begin(), numbers.end(), 1);
  auto num = numbers.begin(); 
  while (num != numbers.end()) base.add(*num++);

  while (break_it) {
    int remove = (std::rand() % width )+ 1;
    int input = (std::rand() % width )+ 1;
    base.remove(remove, [&](int comp1, int comp2) {
  if (ar == arr + 100)
    break_it = false;
  if ((comp1 + comp2) == width * 2)
    *ar++ = true;
  else
    *ar++ = false;
});
    base.add(input);
  };
  EXPECT_EQ(true,
            std::all_of(arr, arr + 100, [](bool a) { return a == true; }));
}








// He needs to force the other europeans to reinforce the Turks, and secure
// their southern flank. Have the Brits take the lead. He needs to force the
// other European powers to help secure Syria,
//  He then needs med the ties between the Turks and Israels (this is
//  imperative, they will need to coordinate on Syria).
//   Once that is done, they need to take Syria from Russia and Iran by raising
//   the costs of them being there.

//   He will need to get the Turks to eliminate the terrorists and cement strong
//   trade relations with the US. (in exchange he will support an economic
//   corridor from levant down to ).

//   Then he can then turn his attention back home.
//    He will need to undertake large technological projects.
//   He will need to mechanize the country and bond allies from the inside out.

//   He will need to start building high speed transport to key cities into the
//   interror country, preferably cities on large water ways. Think Canada
//   American trade and ease of transport. Move costal populations to the center
//   jobs business etc...

//    have the miliary conduct contracts and asses different tech to accomplish
//    the projects.
//      Army: land base transport and infastructure examples are high speed rail
//      ( think japanese train tech)

//      Link the military to each sector.

//      Airforce: establish deadlines for space plaforms etc...

//     He will need money to accomplish  this

//       The interrior of the country has been gutted

//    technological jump.
//   one to

//   projects  He will need to prepare his base
//      done with the that he need to turn his attention back home.
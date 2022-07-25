#include <fstream>
#include <iostream>
#include <sstream>
#include <string>
#include <bits/stdio.h>
// table markers
// 
// \n
//     Newline 
// \r
//     Carriage return 
// \t
//     Horizontal TAB 
// \b
//     Backspace 
// \f
//     Form feed 
// \\
//     Backslash 
// \(
//     Left parenthesis 
// \)
//     Right parenthesis 
// \ddd
//     The character code ddd, where ddd is in octal. 




template <class T, T WIDTH>
class File_System_Class {
 protected:
#define handle_error(msg) \
  do {                    \
    perror(msg);          \
    exit(EXIT_FAILURE);   \
  } while (0)

  std::int_fast64_t powint(int base, int exp) {
    std::int_fast64_t result{1};
    while (exp) {
      if (exp & 1) result *= base;
      exp >>= 1;
      base *= base;
    }

    return result;
  }

  // generate all the composit numbers
  T composit_numbers[WIDTH];

  const void geneate_composite_number() {
    unsigned long long i, j;
    unsigned long long k = 0;
    for (i = 2; i <= WIDTH; i++) {
      for (j = 2; j < i; j++)
        if (i % j == 0) {
          composit_numbers[k++] = i;
          break;
        }
    }
  };

  // Sequence 0ub15vnuqsyli
  // equation for generating placements.
  // a(n)=∑[floor(log(composite(n)))]
  // composite(n)=nth composite number
  // ∑(a)=partial sums of a
  // n≥1
  // 5 operations
  // Prime

  T placements[WIDTH];
  const void generate_placements() {
    auto start = placements;
    unsigned long long values = 1;
    unsigned long long sum = 0;
    while (start != &placements[WIDTH]) {
      sum += std::floor(std::log(composit_numbers[values++]));
      *start++ = sum;
    };
  };

  char *addr;
  int fd;
  struct stat sb;
  off_t offset, pa_offset;

  size_t length;
  ssize_t s;
  char *anon;
  std::atomic<std::atomic<char> *> memory_manage;
  void setup(std::string str) {
    std::string directory(
        "/home/hoss/Documents/algorithms/write_to_file/read_in");
    directory += str;
    if ((fd = open(directory.c_str(), O_CREAT | O_RDWR | O_SYNC,
                   S_IRUSR | S_IWUSR | O_TRUNC, (mode_t)0600)) == -1)
      err(1, "open");

    if (ftruncate(fd, WIDTH) != 0) throw err;

    if (fstat(fd, &sb) == -1) /* To obtain file size */
      handle_error("fstat");

    offset = atoi("0");
    pa_offset = offset & ~(sysconf(_SC_PAGE_SIZE) - 1);

    /* offset for mmap() must be page aligned */

    // if (offset >= sb.st_size) {
    //   fprintf(stderr, "offset is past end of file\n");
    //   exit(EXIT_FAILURE);
    // }
    int argc = 5;
    if (argc == 4) {
      length = atoi("3");
      if (offset + length > sb.st_size) length = sb.st_size - offset;
      /* Can't display bytes past end of file */

    } else { /* No length arg ==> display to end of file */
      length = sb.st_size - offset;
    }

    memory_manage = reinterpret_cast<std::atomic<char> *>(
        mmap(NULL, length + offset - pa_offset, PROT_READ | PROT_WRITE,
             MAP_SHARED, fd, pa_offset));
  }
};
























template< size_t SIZE >
class FILESYSTEM {
 public:
  char write_file_buffer[SIZE] = {0};
  size_t s = 0;
  void read_file_into_string(const std::string filename)
      __attribute__((optimize(0))) {
    std::ifstream in(filename.c_str());

    if (!in) {
      std::cerr << "Cannot open file" << std::endl;
      
    };
    
    std::string buffer;
    while (std::getline(in, buffer)) {
      if (buffer.size() > 0) {
        std::istringstream iss(buffer);
        std::string b;
        size_t word = 1;
        while (iss >> b)
        {
          size_t e = b.length() + s;
          size_t strLen = 0;
          while (s < e) {
      
            write_file_buffer[s++] = b[strLen++];
          };

          size_t o = word++ % 3;
          write_file_buffer[s] = o ? '\t' : '\n';
          s++;
        };
      }
    }
  }
  void copy_to_file(const std::string filename) {
    std::fstream file = std::fstream("file.txt", std::ios::out);
    size_t i = 0;
    file.write(write_file_buffer, s);
  };
};
int main() {
  std::string file = "text.txt";
  FILESYSTEM<400> f;
  f.read_file_into_string(file);
  f.copy_to_file(file);
  return 0;
};
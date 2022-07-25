#include <arpa/inet.h>
#include <assert.h>
#include <errno.h>
#include <netdb.h>
#include <netinet/in.h>
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <unistd.h>

#include <iostream>
#include <memory>
#include <sstream>
#include <string>
#include <thread>

struct address_object {
  int connfd;
  char *file;

  sockaddr_in address;
  address_object(int conn, char *str, sockaddr_in addr)
      : connfd(conn), file(str), address(addr){};
};


template <int buffer = 1024, int blocks = 256>
class socket_stream {
  std::stringstream ss;
  bool end = true;
  FILE *fp;
  address_object address;

 public:
  socket_stream( address_object addr): fp(fopen(addr.file, "rb")), address(addr) {

    write(address.connfd, address.file, blocks);
    end = true;
  };
  friend std::stringstream &operator>>(std::stringstream &in,
                                       const socket_stream<1024, 256> &obj) {
    int a, b, c;
    if (in >> a >> b >> c) {
      obj.print(a, b, c);
    } else {
      obj.end = false;
    };
    return in;
  };
  explicit operator bool() const { return end }

  void print(int a, int b, int c) {
    std::cout << a << std::endl;
    std::cout << b << std::endl;
    std::cout << c << std::endl;
  }

  void buffer_read_and_send() {
    while (true) {
      char buffer_file_chunks_of_256[1024] = {0};
      size_t is_read_success =
          fread(buffer_file_chunks_of_256, sizeof(char), 1024, fp);

      if (is_read_success > 0) {
        write(send_peramiters.connfd, buffer_file_chunks_of_256,
              is_read_success);
      }
      if (is_read_success < 1024) {
        if (feof(fp)) {
          std::cout << "End of file\n";
          std::cout << "File transfer completed for id: %d\n";
        }
        if (ferror(fp)) std::cout << "Error reading\n";
        break;
      }
    }

    std::cout << "Closing Connection for id: %d\n";
    close(send_peramiters.connfd);
    shutdown(send_peramiters.connfd, SHUT_WR);
    sleep(2);
    std::terminate();
  }
};
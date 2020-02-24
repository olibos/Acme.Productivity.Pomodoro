// <copyright file="UserRepository.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.SqlServer
{
    using System;
    using System.Linq;

    using Acme.Productivity.Pomodoro.Core;
    using Acme.Productivity.Pomodoro.Data.SqlServer.Model;

    public class UserRepository: IUserRepository
    {
        private readonly PomodoroContext _context;

        public UserRepository(PomodoroContext context)
        {
            this._context = context;
        }

        public AuthenticatedUser Authenticate(string userName, string password)
        {
            var userDb = this._context.Users.SingleOrDefault(x => x.Email == userName);

            return new AuthenticatedUser
            {
                Id = Guid.NewGuid(),
                Name = userName
            };
        }
    }
}